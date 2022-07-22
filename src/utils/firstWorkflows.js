import { nanoid } from 'nanoid';

export default [
  // {
  //   id: nanoid(),
  //   name: 'Google search',
  //   createdAt: Date.now(),
  //   drawflow: {
  //     nodes: [
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: 'd634ff22-5dfe-44dc-83d2-842412bd9fbf-output-1',
  //               position: 'right',
  //               x: 196.00000657196182,
  //               y: 28.000021560199762,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 50, y: 300, z: 0 },
  //         id: 'd634ff22-5dfe-44dc-83d2-842412bd9fbf',
  //         label: 'trigger',
  //         position: { x: 50, y: 300 },
  //         data: { type: 'manual', interval: 10 },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: 'b9e7e0d4-e86a-4635-a352-31c63723fef4-output-1',
  //               position: 'right',
  //               x: 196.00006103515628,
  //               y: 27.999992370605472,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: 'b9e7e0d4-e86a-4635-a352-31c63723fef4-input-1',
  //               position: 'left',
  //               x: -20,
  //               y: 27.999992370605472,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 353, y: 298, z: 0 },
  //         id: 'b9e7e0d4-e86a-4635-a352-31c63723fef4',
  //         label: 'new-tab',
  //         position: { x: 353, y: 298 },
  //         data: {
  //           disableBlock: false,
  //           description: '',
  //           url: 'https://google.com',
  //           userAgent: '',
  //           active: true,
  //           inGroup: false,
  //           waitTabLoaded: false,
  //           updatePrevTab: false,
  //           customUserAgent: false,
  //           onError: {},
  //         },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '09f3a14c-0514-4287-93b0-aa92b0064fba-output-1',
  //               position: 'right',
  //               x: 195.99997405489208,
  //               y: 28.00001941411291,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '09f3a14c-0514-4287-93b0-aa92b0064fba-input-1',
  //               position: 'left',
  //               x: -20.000021574075806,
  //               y: 28.00001941411291,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 641, y: 290, z: 0 },
  //         id: '09f3a14c-0514-4287-93b0-aa92b0064fba',
  //         label: 'forms',
  //         position: { x: 641, y: 290 },
  //         data: {
  //           description: 'Type query',
  //           selector: "[name='q']",
  //           markEl: false,
  //           multiple: false,
  //           selected: true,
  //           type: 'text-field',
  //           value: 'Automa Extension',
  //           delay: '120',
  //           events: [],
  //         },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '5f76370d-aa3d-4258-8319-230fcfc49a3a-output-1',
  //               position: 'right',
  //               x: 196.00006103515628,
  //               y: 27.999992370605472,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '5f76370d-aa3d-4258-8319-230fcfc49a3a-input-1',
  //               position: 'left',
  //               x: -20,
  //               y: 27.999992370605472,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 929, y: 293, z: 0 },
  //         id: '5f76370d-aa3d-4258-8319-230fcfc49a3a',
  //         label: 'event-click',
  //         position: { x: 929, y: 293 },
  //         data: {
  //           description: 'Click search',
  //           selector: 'center:nth-child(1) > .gNO89b',
  //           markEl: false,
  //           multiple: false,
  //         },
  //         selected: false,
  //       },
  //     ],
  //     edges: [
  //       {
  //         id: 'edge-0',
  //         sourceHandle: 'd634ff22-5dfe-44dc-83d2-842412bd9fbf-output-1',
  //         targetHandle: 'b9e7e0d4-e86a-4635-a352-31c63723fef4-input-1',
  //         source: 'd634ff22-5dfe-44dc-83d2-842412bd9fbf',
  //         target: 'b9e7e0d4-e86a-4635-a352-31c63723fef4',
  //         class:
  //           'source-d634ff22-5dfe-44dc-83d2-842412bd9fbf-output-1 target-b9e7e0d4-e86a-4635-a352-31c63723fef4-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-1',
  //         sourceHandle: 'b9e7e0d4-e86a-4635-a352-31c63723fef4-output-1',
  //         targetHandle: '09f3a14c-0514-4287-93b0-aa92b0064fba-input-1',
  //         source: 'b9e7e0d4-e86a-4635-a352-31c63723fef4',
  //         target: '09f3a14c-0514-4287-93b0-aa92b0064fba',
  //         class:
  //           'source-b9e7e0d4-e86a-4635-a352-31c63723fef4-output-1 target-09f3a14c-0514-4287-93b0-aa92b0064fba-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //         animated: false,
  //       },
  //       {
  //         id: 'edge-2',
  //         sourceHandle: '09f3a14c-0514-4287-93b0-aa92b0064fba-output-1',
  //         targetHandle: '5f76370d-aa3d-4258-8319-230fcfc49a3a-input-1',
  //         source: '09f3a14c-0514-4287-93b0-aa92b0064fba',
  //         target: '5f76370d-aa3d-4258-8319-230fcfc49a3a',
  //         class:
  //           'source-09f3a14c-0514-4287-93b0-aa92b0064fba-output-1 target-5f76370d-aa3d-4258-8319-230fcfc49a3a-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //     ],
  //     position: [-1.538468549623417, 35.22407674532957],
  //     zoom: 0.7999999999999999,
  //   },
  // },
  // {
  //   id: nanoid(),
  //   name: 'Generate lorem ipsum',
  //   createdAt: Date.now(),
  //   drawflow: {
  //     nodes: [
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: 'c5774692-0be4-457f-82be-d5e4b3344ad7-output-1',
  //               position: 'right',
  //               x: 195.99998474121094,
  //               y: 27.99999237060547,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 50, y: 300, z: 0 },
  //         id: 'c5774692-0be4-457f-82be-d5e4b3344ad7',
  //         label: 'trigger',
  //         position: { x: 50, y: 300 },
  //         data: {
  //           disableBlock: false,
  //           description: '',
  //           type: 'manual',
  //           interval: 60,
  //           delay: 5,
  //           date: '',
  //           time: '00:00',
  //           url: '',
  //           shortcut: '',
  //           activeInInput: false,
  //           isUrlRegex: false,
  //           days: [],
  //         },
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '10a0429e-b8c4-4c04-9ea3-df169cea78e4-output-1',
  //               position: 'right',
  //               x: 195.9999744943092,
  //               y: 28.000021560199755,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '10a0429e-b8c4-4c04-9ea3-df169cea78e4-input-1',
  //               position: 'left',
  //               x: -19.999903128358724,
  //               y: 28.000021560199755,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 315, y: 297, z: 0 },
  //         id: '10a0429e-b8c4-4c04-9ea3-df169cea78e4',
  //         label: 'new-tab',
  //         position: { x: 315, y: 297 },
  //         data: {
  //           disableBlock: false,
  //           description: '',
  //           url: 'http://lipsum.com',
  //           userAgent: '',
  //           active: true,
  //           inGroup: false,
  //           waitTabLoaded: false,
  //           updatePrevTab: true,
  //           customUserAgent: false,
  //         },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '24bdec44-1e80-4cee-9139-00545b8d33d9-output-1',
  //               position: 'right',
  //               x: 195.99997198037403,
  //               y: 28.000015439189703,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '24bdec44-1e80-4cee-9139-00545b8d33d9-input-1',
  //               position: 'left',
  //               x: -20.000004547328174,
  //               y: 28.000015439189703,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 596, y: 302, z: 0 },
  //         id: '24bdec44-1e80-4cee-9139-00545b8d33d9',
  //         label: 'element-scroll',
  //         position: { x: 596, y: 302 },
  //         data: {
  //           disableBlock: false,
  //           description: '',
  //           findBy: 'cssSelector',
  //           waitForSelector: true,
  //           waitSelectorTimeout: 5000,
  //           selector: '#amount',
  //           markEl: false,
  //           multiple: false,
  //           scrollY: 0,
  //           scrollX: 0,
  //           incX: false,
  //           incY: false,
  //           smooth: true,
  //           scrollIntoView: true,
  //         },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockDelay',
  //         dimensions: { width: 192, height: 117 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: 'df24edcc-4c29-49f5-8a29-0e572a4bc6ae-output-1',
  //               position: 'right',
  //               x: 196.00015343897923,
  //               y: 50.687512658751125,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: 'df24edcc-4c29-49f5-8a29-0e572a4bc6ae-input-1',
  //               position: 'left',
  //               x: -19.999913818025576,
  //               y: 50.687512658751125,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 878, y: 282, z: 0 },
  //         id: 'df24edcc-4c29-49f5-8a29-0e572a4bc6ae',
  //         label: 'delay',
  //         position: { x: 878, y: 282 },
  //         data: { time: '1000' },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '2d93c1de-42ca-4f39-8e61-e3e55529fbba-output-1',
  //               position: 'right',
  //               x: 195.99997198037403,
  //               y: 28.000015439189703,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '2d93c1de-42ca-4f39-8e61-e3e55529fbba-input-1',
  //               position: 'left',
  //               x: -20.000004547328174,
  //               y: 28.000015439189703,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 1148, y: 297, z: 0 },
  //         id: '2d93c1de-42ca-4f39-8e61-e3e55529fbba',
  //         label: 'forms',
  //         position: { x: 1148, y: 297 },
  //         data: {
  //           disableBlock: false,
  //           description: 'Lipsum length',
  //           findBy: 'cssSelector',
  //           waitForSelector: false,
  //           waitSelectorTimeout: 5000,
  //           selector: '#amount',
  //           markEl: false,
  //           multiple: false,
  //           selected: true,
  //           clearValue: true,
  //           getValue: false,
  //           saveData: false,
  //           dataColumn: '',
  //           assignVariable: false,
  //           variableName: '',
  //           type: 'text-field',
  //           value: '3',
  //           delay: 0,
  //           events: [],
  //         },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '0f3e2baa-8d6d-4323-8ac7-362f1be39ecb-output-1',
  //               position: 'right',
  //               x: 195.99997198037403,
  //               y: 27.999992756864053,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '0f3e2baa-8d6d-4323-8ac7-362f1be39ecb-input-1',
  //               position: 'left',
  //               x: -20.00009527663077,
  //               y: 27.999992756864053,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 1414, y: 299, z: 0 },
  //         id: '0f3e2baa-8d6d-4323-8ac7-362f1be39ecb',
  //         label: 'event-click',
  //         position: { x: 1414, y: 299 },
  //         data: {
  //           disableBlock: false,
  //           description: 'Generate button',
  //           findBy: 'cssSelector',
  //           waitForSelector: false,
  //           waitSelectorTimeout: 5000,
  //           selector: '#generate',
  //           markEl: false,
  //           multiple: false,
  //         },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockDelay',
  //         dimensions: { width: 192, height: 117 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: 'fb9be12f-8995-4876-8bfe-79323769474b-output-1',
  //               position: 'right',
  //               x: 195,
  //               y: 50.68748474121094,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: 'fb9be12f-8995-4876-8bfe-79323769474b-input-1',
  //               position: 'left',
  //               x: -20,
  //               y: 50.68748474121094,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 1686, y: 280, z: 0 },
  //         id: 'fb9be12f-8995-4876-8bfe-79323769474b',
  //         label: 'delay',
  //         position: { x: 1686, y: 280 },
  //         data: { disableBlock: false, time: 2000 },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '7205fcf2-deda-445e-9690-4e36adb52585-output-1',
  //               position: 'right',
  //               x: 195.99997449430924,
  //               y: 28.00000552137348,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '7205fcf2-deda-445e-9690-4e36adb52585-input-1',
  //               position: 'left',
  //               x: -20.000031438968968,
  //               y: 28.00000552137348,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 1973, y: 307, z: 0 },
  //         id: '7205fcf2-deda-445e-9690-4e36adb52585',
  //         label: 'get-text',
  //         position: { x: 1973, y: 307 },
  //         data: {
  //           disableBlock: false,
  //           description: 'Get text result',
  //           findBy: 'cssSelector',
  //           waitForSelector: false,
  //           waitSelectorTimeout: 5000,
  //           selector: '#lipsum',
  //           markEl: false,
  //           multiple: false,
  //           regex: '',
  //           prefixText: '',
  //           suffixText: '',
  //           regexExp: ['g', 'g'],
  //           dataColumn: '',
  //           saveData: true,
  //           includeTags: false,
  //           addExtraRow: false,
  //           assignVariable: false,
  //           variableName: '',
  //           extraRowValue: '',
  //           extraRowDataColumn: '',
  //         },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockRepeatTask',
  //         dimensions: { width: 193, height: 149 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '3d3e8fac-97fa-4c3d-84bc-a3db18740184-output-1',
  //               position: 'right',
  //               x: 197.2124006448874,
  //               y: 66.6874815732158,
  //               width: 16,
  //               height: 16,
  //             },
  //             {
  //               id: '3d3e8fac-97fa-4c3d-84bc-a3db18740184-output-2',
  //               position: 'right',
  //               x: 197.2124006448874,
  //               y: 113.3875114484557,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '3d3e8fac-97fa-4c3d-84bc-a3db18740184-input-1',
  //               position: 'left',
  //               x: -20.000129470007995,
  //               y: 66.6874815732158,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 2253, y: 263.5, z: 0 },
  //         id: '3d3e8fac-97fa-4c3d-84bc-a3db18740184',
  //         label: 'repeat-task',
  //         position: { x: 2253, y: 263.5 },
  //         data: { disableBlock: false, repeatFor: 2 },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 72 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '4d39ecd5-f33f-4e57-b11d-2f26b1076334-output-1',
  //               position: 'right',
  //               x: 195.9998661589599,
  //               y: 27.999992440129862,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '4d39ecd5-f33f-4e57-b11d-2f26b1076334-input-1',
  //               position: 'left',
  //               x: -20.00023736594018,
  //               y: 27.999992440129862,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 2529.75, y: 304, z: 0 },
  //         id: '4d39ecd5-f33f-4e57-b11d-2f26b1076334',
  //         label: 'export-data',
  //         position: { x: 2529.75, y: 304 },
  //         data: {
  //           disableBlock: false,
  //           name: 'Lipsum',
  //           refKey: '',
  //           type: 'plain-text',
  //           description: '',
  //           variableName: '',
  //           addBOMHeader: false,
  //           onConflict: 'uniquify',
  //           dataToExport: 'data-columns',
  //         },
  //         selected: false,
  //       },
  //       {
  //         type: 'BlockBasic',
  //         dimensions: { width: 192, height: 96 },
  //         handleBounds: {
  //           source: [
  //             {
  //               id: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c-output-1',
  //               position: 'right',
  //               x: 196.00006103515625,
  //               y: 40.000038146972656,
  //               width: 16,
  //               height: 16,
  //             },
  //             {
  //               id: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c-output-fallback',
  //               position: 'right',
  //               x: 196.00006103515625,
  //               y: 62.00000762939453,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //           target: [
  //             {
  //               id: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c-input-1',
  //               position: 'left',
  //               x: -20,
  //               y: 40.000038146972656,
  //               width: 16,
  //               height: 16,
  //             },
  //           ],
  //         },
  //         computedPosition: { x: 1135.5, y: 628, z: 0 },
  //         id: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c',
  //         label: 'go-back',
  //         position: { x: 1135.5, y: 628 },
  //         data: {
  //           disableBlock: false,
  //           onError: {
  //             retry: false,
  //             enable: true,
  //             retryTimes: 1,
  //             retryInterval: 2,
  //             toDo: 'fallback',
  //           },
  //         },
  //       },
  //     ],
  //     edges: [
  //       {
  //         id: 'edge-0',
  //         sourceHandle: 'c5774692-0be4-457f-82be-d5e4b3344ad7-output-1',
  //         targetHandle: '10a0429e-b8c4-4c04-9ea3-df169cea78e4-input-1',
  //         source: 'c5774692-0be4-457f-82be-d5e4b3344ad7',
  //         target: '10a0429e-b8c4-4c04-9ea3-df169cea78e4',
  //         class:
  //           'source-c5774692-0be4-457f-82be-d5e4b3344ad7-output-1 target-10a0429e-b8c4-4c04-9ea3-df169cea78e4-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-1',
  //         sourceHandle: '10a0429e-b8c4-4c04-9ea3-df169cea78e4-output-1',
  //         targetHandle: '24bdec44-1e80-4cee-9139-00545b8d33d9-input-1',
  //         source: '10a0429e-b8c4-4c04-9ea3-df169cea78e4',
  //         target: '24bdec44-1e80-4cee-9139-00545b8d33d9',
  //         class:
  //           'source-10a0429e-b8c4-4c04-9ea3-df169cea78e4-output-1 target-24bdec44-1e80-4cee-9139-00545b8d33d9-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-2',
  //         sourceHandle: '24bdec44-1e80-4cee-9139-00545b8d33d9-output-1',
  //         targetHandle: 'df24edcc-4c29-49f5-8a29-0e572a4bc6ae-input-1',
  //         source: '24bdec44-1e80-4cee-9139-00545b8d33d9',
  //         target: 'df24edcc-4c29-49f5-8a29-0e572a4bc6ae',
  //         class:
  //           'source-24bdec44-1e80-4cee-9139-00545b8d33d9-output-1 target-df24edcc-4c29-49f5-8a29-0e572a4bc6ae-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-3',
  //         sourceHandle: 'df24edcc-4c29-49f5-8a29-0e572a4bc6ae-output-1',
  //         targetHandle: '2d93c1de-42ca-4f39-8e61-e3e55529fbba-input-1',
  //         source: 'df24edcc-4c29-49f5-8a29-0e572a4bc6ae',
  //         target: '2d93c1de-42ca-4f39-8e61-e3e55529fbba',
  //         class:
  //           'source-df24edcc-4c29-49f5-8a29-0e572a4bc6ae-output-1 target-2d93c1de-42ca-4f39-8e61-e3e55529fbba-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-4',
  //         sourceHandle: '2d93c1de-42ca-4f39-8e61-e3e55529fbba-output-1',
  //         targetHandle: '0f3e2baa-8d6d-4323-8ac7-362f1be39ecb-input-1',
  //         source: '2d93c1de-42ca-4f39-8e61-e3e55529fbba',
  //         target: '0f3e2baa-8d6d-4323-8ac7-362f1be39ecb',
  //         class:
  //           'source-2d93c1de-42ca-4f39-8e61-e3e55529fbba-output-1 target-0f3e2baa-8d6d-4323-8ac7-362f1be39ecb-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-5',
  //         sourceHandle: '0f3e2baa-8d6d-4323-8ac7-362f1be39ecb-output-1',
  //         targetHandle: 'fb9be12f-8995-4876-8bfe-79323769474b-input-1',
  //         source: '0f3e2baa-8d6d-4323-8ac7-362f1be39ecb',
  //         target: 'fb9be12f-8995-4876-8bfe-79323769474b',
  //         class:
  //           'source-0f3e2baa-8d6d-4323-8ac7-362f1be39ecb-output-1 target-fb9be12f-8995-4876-8bfe-79323769474b-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-6',
  //         sourceHandle: 'fb9be12f-8995-4876-8bfe-79323769474b-output-1',
  //         targetHandle: '7205fcf2-deda-445e-9690-4e36adb52585-input-1',
  //         source: 'fb9be12f-8995-4876-8bfe-79323769474b',
  //         target: '7205fcf2-deda-445e-9690-4e36adb52585',
  //         class:
  //           'source-fb9be12f-8995-4876-8bfe-79323769474b-output-1 target-7205fcf2-deda-445e-9690-4e36adb52585-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-7',
  //         sourceHandle: '7205fcf2-deda-445e-9690-4e36adb52585-output-1',
  //         targetHandle: '3d3e8fac-97fa-4c3d-84bc-a3db18740184-input-1',
  //         source: '7205fcf2-deda-445e-9690-4e36adb52585',
  //         target: '3d3e8fac-97fa-4c3d-84bc-a3db18740184',
  //         class:
  //           'source-7205fcf2-deda-445e-9690-4e36adb52585-output-1 target-3d3e8fac-97fa-4c3d-84bc-a3db18740184-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-8',
  //         sourceHandle: '3d3e8fac-97fa-4c3d-84bc-a3db18740184-output-1',
  //         targetHandle: '4d39ecd5-f33f-4e57-b11d-2f26b1076334-input-1',
  //         source: '3d3e8fac-97fa-4c3d-84bc-a3db18740184',
  //         target: '4d39ecd5-f33f-4e57-b11d-2f26b1076334',
  //         class:
  //           'source-3d3e8fac-97fa-4c3d-84bc-a3db18740184-output-1 target-4d39ecd5-f33f-4e57-b11d-2f26b1076334-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-9',
  //         sourceHandle: '3d3e8fac-97fa-4c3d-84bc-a3db18740184-output-2',
  //         targetHandle: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c-input-1',
  //         source: '3d3e8fac-97fa-4c3d-84bc-a3db18740184',
  //         target: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c',
  //         class:
  //           'source-3d3e8fac-97fa-4c3d-84bc-a3db18740184-output-2 target-2f5fec61-a318-4e2b-b7d3-bc7328bd282c-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-10',
  //         sourceHandle: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c-output-1',
  //         targetHandle: '24bdec44-1e80-4cee-9139-00545b8d33d9-input-1',
  //         source: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c',
  //         target: '24bdec44-1e80-4cee-9139-00545b8d33d9',
  //         class:
  //           'source-2f5fec61-a318-4e2b-b7d3-bc7328bd282c-output-1 target-24bdec44-1e80-4cee-9139-00545b8d33d9-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //       {
  //         id: 'edge-11',
  //         sourceHandle: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c-output-fallback',
  //         targetHandle: '10a0429e-b8c4-4c04-9ea3-df169cea78e4-input-1',
  //         source: '2f5fec61-a318-4e2b-b7d3-bc7328bd282c',
  //         target: '10a0429e-b8c4-4c04-9ea3-df169cea78e4',
  //         class:
  //           'source-2f5fec61-a318-4e2b-b7d3-bc7328bd282c-output-fallback target-10a0429e-b8c4-4c04-9ea3-df169cea78e4-input-1',
  //         type: 'default',
  //         z: 0,
  //         sourceX: 0,
  //         sourceY: 0,
  //         targetX: 0,
  //         targetY: 0,
  //         markerEnd: 'arrowclosed',
  //       },
  //     ],
  //     position: [29, 97],
  //     zoom: 0.5,
  //   },
  // },
  {
    "extVersion": "1.15.3",
    "name": "test111",
    "icon": "riGlobalLine",
    "table": [],
    "version": "1.15.3",
    "drawflow": {
        "edges": [
            {
                "class": "source-bd01x51-output-1 target-ner0sbh-input-1",
                "id": "vueflow__edge-bd01x51bd01x51-output-1-ner0sbhner0sbh-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "bd01x51",
                "sourceHandle": "bd01x51-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "ner0sbh",
                "targetHandle": "ner0sbh-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-afrxffq-output-1 target-hff0lh9-input-1",
                "id": "vueflow__edge-afrxffqafrxffq-output-1-hff0lh9hff0lh9-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "afrxffq",
                "sourceHandle": "afrxffq-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "hff0lh9",
                "targetHandle": "hff0lh9-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-hff0lh9-output-IHlaahNECz8lfIVsiQ0z4 target-dr1ek4h-input-1",
                "id": "vueflow__edge-hff0lh9hff0lh9-output-IHlaahNECz8lfIVsiQ0z4-dr1ek4hdr1ek4h-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "hff0lh9",
                "sourceHandle": "hff0lh9-output-IHlaahNECz8lfIVsiQ0z4",
                "sourceX": 0,
                "sourceY": 0,
                "target": "dr1ek4h",
                "targetHandle": "dr1ek4h-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-hff0lh9-output-Sj9gdUYer3mP0_qhKm9Vg target-bd01x51-input-1",
                "id": "vueflow__edge-hff0lh9hff0lh9-output-Sj9gdUYer3mP0_qhKm9Vg-bd01x51bd01x51-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "hff0lh9",
                "sourceHandle": "hff0lh9-output-Sj9gdUYer3mP0_qhKm9Vg",
                "sourceX": 0,
                "sourceY": 0,
                "target": "bd01x51",
                "targetHandle": "bd01x51-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-dr1ek4h-output-1 target-432wot8-input-1",
                "id": "vueflow__edge-dr1ek4hdr1ek4h-output-1-432wot8432wot8-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "dr1ek4h",
                "sourceHandle": "dr1ek4h-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "432wot8",
                "targetHandle": "432wot8-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-432wot8-output-1 target-lyxx7x7-input-1",
                "id": "vueflow__edge-432wot8432wot8-output-1-lyxx7x7lyxx7x7-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "432wot8",
                "sourceHandle": "432wot8-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "lyxx7x7",
                "targetHandle": "lyxx7x7-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-si6et9g-output-1 target-f3lec67-input-1",
                "id": "vueflow__edge-si6et9gsi6et9g-output-1-f3lec67f3lec67-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "si6et9g",
                "sourceHandle": "si6et9g-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "f3lec67",
                "targetHandle": "f3lec67-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-f3lec67-output-1 target-7d52tfa-input-1",
                "id": "vueflow__edge-f3lec67f3lec67-output-1-7d52tfa7d52tfa-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "f3lec67",
                "sourceHandle": "f3lec67-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "7d52tfa",
                "targetHandle": "7d52tfa-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-7d52tfa-output-fallback target-59txs2y-input-1",
                "id": "vueflow__edge-7d52tfa7d52tfa-output-fallback-59txs2y59txs2y-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "7d52tfa",
                "sourceHandle": "7d52tfa-output-fallback",
                "sourceX": 0,
                "sourceY": 0,
                "target": "59txs2y",
                "targetHandle": "59txs2y-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-59txs2y-output-1 target-7d52tfa-input-1",
                "id": "vueflow__edge-59txs2y59txs2y-output-1-7d52tfa7d52tfa-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "59txs2y",
                "sourceHandle": "59txs2y-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "7d52tfa",
                "targetHandle": "7d52tfa-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-7d52tfa-output-1 target-qg7four-input-1",
                "id": "vueflow__edge-7d52tfa7d52tfa-output-1-qg7fourqg7four-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "7d52tfa",
                "sourceHandle": "7d52tfa-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "qg7four",
                "targetHandle": "qg7four-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-qg7four-output-1 target-336fxak-input-1",
                "id": "vueflow__edge-qg7fourqg7four-output-1-336fxak336fxak-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "qg7four",
                "sourceHandle": "qg7four-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "336fxak",
                "targetHandle": "336fxak-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-8yec0hx-output-1 target-os8sfju-input-1",
                "id": "vueflow__edge-8yec0hx8yec0hx-output-1-os8sfjuos8sfju-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "8yec0hx",
                "sourceHandle": "8yec0hx-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "os8sfju",
                "targetHandle": "os8sfju-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-336fxak-output-1 target-afrxffq-input-1",
                "id": "vueflow__edge-336fxak336fxak-output-1-afrxffqafrxffq-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "336fxak",
                "sourceHandle": "336fxak-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "afrxffq",
                "targetHandle": "afrxffq-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-hff0lh9-output-8Iv8ew22b6MeofnaalLLx target-l29oqr6-input-1",
                "id": "vueflow__edge-hff0lh9hff0lh9-output-8Iv8ew22b6MeofnaalLLx-l29oqr6l29oqr6-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "hff0lh9",
                "sourceHandle": "hff0lh9-output-8Iv8ew22b6MeofnaalLLx",
                "sourceX": 0,
                "sourceY": 0,
                "target": "l29oqr6",
                "targetHandle": "l29oqr6-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-l29oqr6-output-1 target-8yec0hx-input-1",
                "id": "vueflow__edge-l29oqr6l29oqr6-output-1-8yec0hx8yec0hx-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "l29oqr6",
                "sourceHandle": "l29oqr6-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "8yec0hx",
                "targetHandle": "8yec0hx-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-os8sfju-output-1 target-7d52tfa-input-1",
                "id": "vueflow__edge-os8sfjuos8sfju-output-1-7d52tfa7d52tfa-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "os8sfju",
                "sourceHandle": "os8sfju-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "7d52tfa",
                "targetHandle": "7d52tfa-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-hff0lh9-output-fallback target-l29oqr6-input-1",
                "id": "vueflow__edge-hff0lh9hff0lh9-output-fallback-l29oqr6l29oqr6-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "hff0lh9",
                "sourceHandle": "hff0lh9-output-fallback",
                "sourceX": 0,
                "sourceY": 0,
                "target": "l29oqr6",
                "targetHandle": "l29oqr6-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-ner0sbh-output-1 target-8yec0hx-input-1",
                "id": "vueflow__edge-ner0sbhner0sbh-output-1-8yec0hx8yec0hx-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "ner0sbh",
                "sourceHandle": "ner0sbh-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "8yec0hx",
                "targetHandle": "8yec0hx-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-EundkZVRMg43bikGZfFlB-output-1 target-h8py58h-input-1",
                "id": "vueflow__edge-EundkZVRMg43bikGZfFlBEundkZVRMg43bikGZfFlB-output-1-h8py58hh8py58h-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "EundkZVRMg43bikGZfFlB",
                "sourceHandle": "EundkZVRMg43bikGZfFlB-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "h8py58h",
                "targetHandle": "h8py58h-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            },
            {
                "class": "source-h8py58h-output-1 target-si6et9g-input-1",
                "id": "vueflow__edge-h8py58hh8py58h-output-1-si6et9gsi6et9g-input-1",
                "markerEnd": "",
                "selectable": true,
                "source": "h8py58h",
                "sourceHandle": "h8py58h-output-1",
                "sourceX": 0,
                "sourceY": 0,
                "target": "si6et9g",
                "targetHandle": "si6et9g-input-1",
                "targetX": 0,
                "targetY": 0,
                "type": "default",
                "updatable": true,
                "z": 0
            }
        ],
        "nodes": [
            {
                "computedPosition": {
                    "x": -1885.4277847477167,
                    "y": 326.1828419095684,
                    "z": 1000
                },
                "data": {
                    "activeInInput": false,
                    "contextMenuName": "test",
                    "contextTypes": [],
                    "date": "",
                    "days": [],
                    "delay": 5,
                    "description": "",
                    "disableBlock": false,
                    "interval": 60,
                    "isUrlRegex": false,
                    "observeElement": {
                        "baseElOptions": {
                            "attributeFilter": [],
                            "attributes": false,
                            "characterData": false,
                            "childList": true,
                            "subtree": false
                        },
                        "baseSelector": "",
                        "matchPattern": "",
                        "selector": "",
                        "targetOptions": {
                            "attributeFilter": [],
                            "attributes": false,
                            "characterData": false,
                            "childList": true,
                            "subtree": false
                        }
                    },
                    "shortcut": "",
                    "time": "00:00",
                    "type": "manual",
                    "url": "https://www.degenknows.io/premint"
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "EundkZVRMg43bikGZfFlB-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.99999368184294,
                            "y": 27.999977479696987
                        }
                    ]
                },
                "id": "EundkZVRMg43bikGZfFlB",
                "label": "trigger",
                "position": {
                    "x": -1885.4277847477167,
                    "y": 326.1828419095684
                },
                "selected": true,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": -606.2877116811208,
                    "y": -3.9497540042543733,
                    "z": 0
                },
                "data": {
                    "active": true,
                    "customUserAgent": false,
                    "description": "Twitter page",
                    "disableBlock": false,
                    "inGroup": false,
                    "updatePrevTab": false,
                    "url": "{{variables@twitter_url}}",
                    "userAgent": "",
                    "waitTabLoaded": true
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "336fxak-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.99999368184294,
                            "y": 28.00000270035766
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "336fxak-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 28.00000270035766
                        }
                    ]
                },
                "id": "336fxak",
                "label": "new-tab",
                "position": {
                    "x": -606.2877116811208,
                    "y": -3.9497540042543733
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": 492.8567940540272,
                    "y": 173.80614469657024,
                    "z": 0
                },
                "data": {
                    "description": "",
                    "disableBlock": false,
                    "findBy": "cssSelector",
                    "markEl": false,
                    "multiple": false,
                    "selector": "div[aria-label=\"\\5173\\6CE8  @unstoppableweb\"]",
                    "waitForSelector": true,
                    "waitSelectorTimeout": 5000
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "dr1ek4h-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 196.0000441231643,
                            "y": 28.00000270035766
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "dr1ek4h-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 28.00000270035766
                        }
                    ]
                },
                "id": "dr1ek4h",
                "label": "event-click",
                "position": {
                    "x": 492.8567940540272,
                    "y": 173.80614469657024
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": 934.2373063244954,
                    "y": 250.80369645546375,
                    "z": 0
                },
                "data": {
                    "description": "",
                    "disableBlock": false,
                    "findBy": "cssSelector",
                    "markEl": false,
                    "multiple": false,
                    "selector": "a.r-1mnahxq",
                    "waitForSelector": false,
                    "waitSelectorTimeout": 5000
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "432wot8-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 196.0000441231643,
                            "y": 28.00000270035766
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "432wot8-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -20.00008479671197,
                            "y": 28.00000270035766
                        }
                    ]
                },
                "id": "432wot8",
                "label": "event-click",
                "position": {
                    "x": 934.2373063244954,
                    "y": 250.80369645546375
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": 1250.4805375612655,
                    "y": 252.3792129468381,
                    "z": 0
                },
                "data": {
                    "disableBlock": false,
                    "onError": {
                        "enable": false,
                        "retry": false,
                        "retryInterval": 2,
                        "retryTimes": 1,
                        "toDo": "error"
                    }
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "lyxx7x7-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 196.0000441231643,
                            "y": 27.999977479696987
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "lyxx7x7-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 27.999977479696987
                        }
                    ]
                },
                "id": "lyxx7x7",
                "label": "active-tab",
                "position": {
                    "x": 1250.4805375612655,
                    "y": 252.3792129468381
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": -251.0231087389799,
                    "y": 30.045049316247642,
                    "z": 0
                },
                "data": {
                    "disableBlock": false,
                    "time": "1500"
                },
                "dimensions": {
                    "height": 117,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "afrxffq-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.99999368184294,
                            "y": 50.58593661526081
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "afrxffq-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -20.00003435539062,
                            "y": 50.58593661526081
                        }
                    ]
                },
                "id": "afrxffq",
                "label": "delay",
                "position": {
                    "x": -251.0231087389799,
                    "y": 30.045049316247642
                },
                "selected": false,
                "type": "BlockDelay"
            },
            {
                "computedPosition": {
                    "x": 494.52346072069395,
                    "y": 29.7695734723016,
                    "z": 0
                },
                "data": {
                    "description": "",
                    "disableBlock": false,
                    "findBy": "cssSelector",
                    "markEl": false,
                    "multiple": false,
                    "selector": "div[aria-label=\"Follow @unstoppableweb\"]",
                    "waitForSelector": true,
                    "waitSelectorTimeout": 5000
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "bd01x51-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 196.0000441231643,
                            "y": 28.00000270035766
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "bd01x51-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 28.00000270035766
                        }
                    ]
                },
                "id": "bd01x51",
                "label": "event-click",
                "position": {
                    "x": 494.52346072069395,
                    "y": 29.7695734723016
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": 786.00612294559,
                    "y": 24.010075443865617,
                    "z": 0
                },
                "data": {
                    "activeTab": false,
                    "allWindows": false,
                    "closeType": "tab",
                    "description": "close twitter",
                    "disableBlock": false,
                    "url": "https://twitter.com/unstoppableweb"
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "ner0sbh-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.9999432405216,
                            "y": 28.00000270035766
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "ner0sbh-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -20.00008479671197,
                            "y": 28.00000270035766
                        }
                    ]
                },
                "id": "ner0sbh",
                "label": "close-tab",
                "position": {
                    "x": 786.00612294559,
                    "y": 24.010075443865617
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": -8.222488018515378,
                    "y": 44.74125247602859,
                    "z": 0
                },
                "data": {
                    "conditions": [
                        {
                            "conditions": [
                                {
                                    "conditions": [
                                        {
                                            "id": "wNY-A2F7iAWQb9K97JUIi",
                                            "items": [
                                                {
                                                    "category": "value",
                                                    "data": {
                                                        "selector": "div[aria-label=\"Follow @unstoppableweb\"]"
                                                    },
                                                    "id": "jQgmrCgOrXjacL1xDTlqk",
                                                    "type": "element#exists"
                                                }
                                            ]
                                        }
                                    ],
                                    "id": "2WUE8FzVyN0LNFsxsUPbc"
                                }
                            ],
                            "id": "Sj9gdUYer3mP0_qhKm9Vg",
                            "name": "Path 1"
                        },
                        {
                            "conditions": [
                                {
                                    "conditions": [
                                        {
                                            "id": "NTNBDxTWzhXdBqjIYuQsp",
                                            "items": [
                                                {
                                                    "category": "value",
                                                    "data": {
                                                        "selector": "div[aria-label=\"\\5173\\6CE8  @unstoppableweb\"]"
                                                    },
                                                    "id": "hCRZsISTG-Dj-c28LCq7V",
                                                    "type": "element#exists"
                                                }
                                            ]
                                        }
                                    ],
                                    "id": "AdrVdr45xQnvQQ1KonIDF"
                                }
                            ],
                            "id": "IHlaahNECz8lfIVsiQ0z4",
                            "name": "Path 2"
                        },
                        {
                            "conditions": [
                                {
                                    "conditions": [
                                        {
                                            "id": "-L4zV5wCN0h-XPaVETEBW",
                                            "items": [
                                                {
                                                    "category": "value",
                                                    "data": {
                                                        "selector": "div[aria-label=\"Following @unstoppableweb\"]"
                                                    },
                                                    "id": "3FViO9jHdlSvA0i1KK9Nq",
                                                    "type": "element#exists"
                                                }
                                            ]
                                        }
                                    ],
                                    "id": "jbP-5QJHn2yWgtlY0myLA"
                                }
                            ],
                            "id": "8Iv8ew22b6MeofnaalLLx",
                            "name": "Path 3"
                        }
                    ],
                    "disableBlock": false,
                    "retryConditions": false,
                    "retryCount": 10,
                    "retryTimeout": 1000
                },
                "dimensions": {
                    "height": 253,
                    "width": 256
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "hff0lh9-output-Sj9gdUYer3mP0_qhKm9Vg",
                            "position": "right",
                            "width": 16,
                            "x": 260.99999184388946,
                            "y": 81.17968250060045
                        },
                        {
                            "height": 16,
                            "id": "hff0lh9-output-IHlaahNECz8lfIVsiQ0z4",
                            "position": "right",
                            "width": 16,
                            "x": 260.99999184388946,
                            "y": 129.17969433568805
                        },
                        {
                            "height": 16,
                            "id": "hff0lh9-output-8Iv8ew22b6MeofnaalLLx",
                            "position": "right",
                            "width": 16,
                            "x": 260.99999184388946,
                            "y": 177.17970617077566
                        },
                        {
                            "height": 16,
                            "id": "hff0lh9-output-fallback",
                            "position": "right",
                            "width": 16,
                            "x": 260.0000430895073,
                            "y": 219.17967239032114
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "hff0lh9-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -20.00003435539062,
                            "y": 118.5859323644177
                        }
                    ]
                },
                "id": "hff0lh9",
                "label": "conditions",
                "position": {
                    "x": -8.222488018515378,
                    "y": 44.74125247602859
                },
                "selected": false,
                "type": "BlockConditions"
            },
            {
                "computedPosition": {
                    "x": 422.59139472336403,
                    "y": 278.2413204061406,
                    "z": 0
                },
                "data": {
                    "activeTab": false,
                    "allWindows": false,
                    "closeType": "tab",
                    "description": "close twitter",
                    "disableBlock": false,
                    "url": "https://twitter.com/unstoppableweb"
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "l29oqr6-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 196.0000441231643,
                            "y": 27.999977479696987
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "l29oqr6-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 27.999977479696987
                        }
                    ]
                },
                "id": "l29oqr6",
                "label": "close-tab",
                "position": {
                    "x": 422.59139472336403,
                    "y": 278.2413204061406
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": -1347.2833024567976,
                    "y": 305.82063097258526,
                    "z": 0
                },
                "data": {
                    "disableBlock": false,
                    "time": "500"
                },
                "dimensions": {
                    "height": 117,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "si6et9g-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 196.0000441231643,
                            "y": 50.58593661526081
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "si6et9g-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 50.58593661526081
                        }
                    ]
                },
                "id": "si6et9g",
                "label": "delay",
                "position": {
                    "x": -1347.2833024567976,
                    "y": 305.82063097258526
                },
                "selected": false,
                "type": "BlockDelay"
            },
            {
                "computedPosition": {
                    "x": -781.1252095504267,
                    "y": 325.0045932936699,
                    "z": 0
                },
                "data": {
                    "conditions": [
                        {
                            "conditions": [
                                {
                                    "id": "XnltBSRwqQ9sAOeG6ddLc",
                                    "items": [
                                        {
                                            "category": "value",
                                            "data": {
                                                "code": "// let url = automaRefData('variables', 'twitter_url')\n// console.log(\"url:\"+{{table@0.url}})\n// const firstRow = automaRefData('table', '0.url')\nlet url = window.localStorage.getItem(\"url\")\n// console.log(url)\nreturn url.indexOf('https://twitter.com/')!==-1"
                                            },
                                            "id": "w2MOqni-yhoKf8VC4T4Gm",
                                            "type": "code"
                                        }
                                    ]
                                }
                            ],
                            "id": "VSQvOX30YfNmsyr5whP4D"
                        }
                    ],
                    "description": "",
                    "disableBlock": false
                },
                "dimensions": {
                    "height": 96,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "7d52tfa-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.99999368184294,
                            "y": 39.99996782813855
                        },
                        {
                            "height": 16,
                            "id": "7d52tfa-output-fallback",
                            "position": "right",
                            "width": 16,
                            "x": 195.99999368184294,
                            "y": 62.0000005749361
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "7d52tfa-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -20.00003435539062,
                            "y": 39.99996782813855
                        }
                    ]
                },
                "id": "7d52tfa",
                "label": "while-loop",
                "position": {
                    "x": -781.1252095504267,
                    "y": 325.0045932936699
                },
                "selected": false,
                "type": "BlockBasicWithFallback"
            },
            {
                "computedPosition": {
                    "x": -1072.1948827810356,
                    "y": 334.0595195654309,
                    "z": 0
                },
                "data": {
                    "code": "const button = document.getElementsByClassName('premint-operate')\n// console.log(button)\nwindow.localStorage.setItem(\"url\",\"\")\nfor (let bt of button){\n  bt.children[0].addEventListener(\"click\", function(e){\n    // console.log(e.target)\n    // console.log(\"当前的url是：\"+window.localStorage.getItem(\"url\"))\n    console.log(\"目标元素被点击\")\n    let url = 'https://twitter.com/unstoppableweb'\n    window.localStorage.setItem(\"url\",url)\n    // console.log(url)\n    // automaSetVariable('twitter_url', 'https://twitter.com/unstoppableweb')\n    // console.log(automaRefData('variables', 'twitter_url'))\n    // automaNextBlock()\n  });\n}\n// automaSetVariable('twitter_url','')\n// automaSetVariable('twitter_url', \"https://twitter.com/unstoppableweb\")\nautomaNextBlock()",
                    "description": "",
                    "disableBlock": false,
                    "everyNewTab": false,
                    "preloadScripts": [],
                    "timeout": 50000
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "f3lec67-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 196.0000441231643,
                            "y": 28.000027921018333
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "f3lec67-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 28.000027921018333
                        }
                    ]
                },
                "id": "f3lec67",
                "label": "javascript-code",
                "position": {
                    "x": -1072.1948827810356,
                    "y": 334.0595195654309
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": -791.4417729226756,
                    "y": 636.1224505063925,
                    "z": 0
                },
                "data": {
                    "disableBlock": false,
                    "time": "500"
                },
                "dimensions": {
                    "height": 117,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "59txs2y-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.99999368184294,
                            "y": 50.58593661526081
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "59txs2y-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 50.58593661526081
                        }
                    ]
                },
                "id": "59txs2y",
                "label": "delay",
                "position": {
                    "x": -791.4417729226756,
                    "y": 636.1224505063925
                },
                "selected": false,
                "type": "BlockDelay"
            },
            {
                "computedPosition": {
                    "x": -909.8878631448927,
                    "y": -1.7496995043727352,
                    "z": 0
                },
                "data": {
                    "code": "automaSetVariable('twitter_url', window.localStorage.getItem(\"url\"))\nautomaNextBlock()",
                    "description": "",
                    "disableBlock": false,
                    "everyNewTab": false,
                    "preloadScripts": [],
                    "timeout": 50000
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "qg7four-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.99999368184294,
                            "y": 28.00000270035766
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "qg7four-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 28.00000270035766
                        }
                    ]
                },
                "id": "qg7four",
                "label": "javascript-code",
                "position": {
                    "x": -909.8878631448927,
                    "y": -1.7496995043727352
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": 120.12988975050416,
                    "y": 717.0197576217722,
                    "z": 0
                },
                "data": {
                    "code": "automaSetVariable('twitter_url', \"\")\nwindow.localStorage.setItem(\"url\",\"\")\nautomaNextBlock()",
                    "description": "",
                    "disableBlock": false,
                    "everyNewTab": false,
                    "preloadScripts": [],
                    "timeout": 20000
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "os8sfju-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 196.0000441231643,
                            "y": 27.999977479696987
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "os8sfju-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 27.999977479696987
                        }
                    ]
                },
                "id": "os8sfju",
                "label": "javascript-code",
                "position": {
                    "x": 120.12988975050416,
                    "y": 717.0197576217722
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": 687.5169196947446,
                    "y": 459.47677159578024,
                    "z": 0
                },
                "data": {
                    "activeTab": true,
                    "createIfNoMatch": false,
                    "description": "",
                    "disableBlock": false,
                    "findTabBy": "match-patterns",
                    "matchPattern": "https://www.degenknows.io/*",
                    "tabIndex": 0,
                    "url": ""
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "8yec0hx-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.9999432405216,
                            "y": 28.000027921018333
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "8yec0hx-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 28.000027921018333
                        }
                    ]
                },
                "id": "8yec0hx",
                "label": "switch-tab",
                "position": {
                    "x": 687.5169196947446,
                    "y": 459.47677159578024
                },
                "selected": false,
                "type": "BlockBasic"
            },
            {
                "computedPosition": {
                    "x": -1615.8966990465083,
                    "y": 325.83015432252955,
                    "z": 0
                },
                "data": {
                    "disableBlock": false
                },
                "dimensions": {
                    "height": 72,
                    "width": 192
                },
                "handleBounds": {
                    "source": [
                        {
                            "height": 16,
                            "id": "h8py58h-output-1",
                            "position": "right",
                            "width": 16,
                            "x": 195.9999432405216,
                            "y": 27.999977479696987
                        }
                    ],
                    "target": [
                        {
                            "height": 16,
                            "id": "h8py58h-input-1",
                            "position": "left",
                            "width": 16,
                            "x": -19.999983914069276,
                            "y": 27.999977479696987
                        }
                    ]
                },
                "id": "h8py58h",
                "label": "active-tab",
                "position": {
                    "x": -1615.8966990465083,
                    "y": 325.83015432252955
                },
                "selected": false,
                "type": "BlockBasic"
            }
        ],
        "position": [
            1162.6360420037718,
            80.86901840611563
        ],
        "zoom": 0.605011472936757
    },
    "settings": {
        "blockDelay": 0,
        "debugMode": false,
        "defaultColumnName": "column",
        "executedBlockOnWeb": false,
        "inputAutocomplete": true,
        "insertDefaultColumn": false,
        "notification": true,
        "onError": "stop-workflow",
        "publicId": "",
        "restartTimes": 3,
        "reuseLastState": false,
        "saveLog": true,
        "tabLoadTimeout": 30000
    },
    "globalData": "{\n\t\"\": \"\"\n}",
    "description": "",
    "includedWorkflows": {}
  }
];