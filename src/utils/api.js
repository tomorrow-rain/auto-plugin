import secrets from 'secrets';
import browser from 'webextension-polyfill';
import { parseJSON } from './helper';

function queryBuilder(obj) {
  let str = '';

  Object.entries(obj).forEach(([key, value], index) => {
    if (index !== 0) str += `&`;

    str += `${key}=${value}`;
  });

  return str;
}

export async function fetchApi(path, options) {
  const urlPath = path.startsWith('/') ? path : `/${path}`;
  const headers = {};

  if (urlPath.startsWith('/me')) {
    let { session } = await browser.storage.local.get('session');
    if (!session) throw new Error('Unauthorized');

    const isExpired = Date.now() > session.expires_at * 1000 - 64000;

    if (isExpired) {
      const response = await fetchApi(
        `/session/refresh?token=${session.refresh_token}`
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      session = result;
      await browser.storage.local.set({ session });
    }

    headers.Authorization = `Bearer ${session.access_token}`;
  }

  return fetch(`${secrets.baseApiUrl}${urlPath}`, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...options,
  });
}

export const googleSheets = {
  getUrl(spreadsheetId, range) {
    return `/services/google-sheets?spreadsheetId=${spreadsheetId}&range=${range}`;
  },
  getValues({ spreadsheetId, range }) {
    const url = this.getUrl(spreadsheetId, range);

    return fetchApi(url);
  },
  getRange({ spreadsheetId, range }) {
    return googleSheets.updateValues({
      range,
      append: true,
      spreadsheetId,
      options: {
        body: JSON.stringify({ values: [] }),
        queries: {
          valueInputOption: 'RAW',
          includeValuesInResponse: false,
          insertDataOption: 'INSERT_ROWS',
        },
      },
    });
  },
  updateValues({ spreadsheetId, range, options = {}, append }) {
    const url = `${this.getUrl(spreadsheetId, range)}&${queryBuilder(
      options?.queries || {}
    )}`;

    return fetchApi(url, {
      ...options,
      method: append ? 'POST' : 'PUT',
    });
  },
};

export async function cacheApi(key, callback, useCache = true) {
  const tenMinutes = 1000 * 10;
  const tenMinutesAgo = Date.now() - tenMinutes;

  const timerKey = `cache-time:${key}`;
  const cacheResult = parseJSON(sessionStorage.getItem(key), null);
  const cacheTime = +sessionStorage.getItem(timerKey) || Date.now();

  if (useCache && cacheResult && tenMinutesAgo < cacheTime) {
    return cacheResult;
  }

  const result = await callback();
  let cacheData = result;

  if (result?.cacheData) {
    cacheData = result?.cacheData;
  }

  sessionStorage.setItem(timerKey, Date.now());
  sessionStorage.setItem(key, JSON.stringify(cacheData));

  return result;
}

export async function getSharedWorkflows(useCache = true) {
  return cacheApi(
    'shared-workflows',
    async () => {
      try {
        const response = await fetchApi('/me/workflows/shared?data=all');

        if (response.status !== 200) throw new Error(response.statusText);

        const result = await response.json();
        const sharedWorkflows = result.reduce((acc, item) => {
          item.drawflow = JSON.stringify(item.drawflow);
          item.table = item.table || item.dataColumns || [];
          item.createdAt = new Date(item.createdAt || Date.now()).getTime();

          acc[item.id] = item;

          return acc;
        }, {});

        return sharedWorkflows;
      } catch (error) {
        console.error(error);

        return {};
      }
    },
    useCache
  );
}

export async function getUserWorkflows(useCache = true) {
  return cacheApi(
    'user-workflows',
    async () => {
      try {
        const { lastBackup } = await browser.storage.local.get('lastBackup');
        const response = await fetchApi(
          `/me/workflows?lastBackup=${(useCache && lastBackup) || null}`
        );

        if (!response.ok) throw new Error(response.statusText);

        const result = await response.json();
        const workflows = result.reduce(
          (acc, workflow) => {
            if (workflow.isHost) {
              acc.hosted[workflow.id] = {
                id: workflow.id,
                hostId: workflow.hostId,
              };
            }

            acc.backup.push(workflow);

            return acc;
          },
          { hosted: {}, backup: [] }
        );

        workflows.cacheData = {
          backup: [],
          hosted: workflows.hosted,
        };

        return workflows;
      } catch (error) {
        console.error(error);

        return {};
      }
    },
    useCache
  );
}
