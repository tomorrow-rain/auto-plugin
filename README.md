# auto-plugin
浏览器自动流程插件（automa  https://github.com/AutomaApp/automa)

Install dependencies
```bash
yarn install
```

Before running the `yarn dev` or `yarn build` script, you need to create the getPassKey.js file in the src/utils directory. Inside the file write

```js
export default function() {
  return 'anything-you-want';
}
```

Compiles and hot-reloads for development for the chrome browser
```bash
yarn dev
```

Compiles and minifies for production for the chrome browser
```bash
yarn build
```

Create a zip file from the build folder
```bash
yarn build:zip
```

Compiles and hot-reloads for development for the firefox browser
```bash
yarn dev:firefox
```

Compiles and minifies for production for the firefox browser
```bash
yarn build:firefox
```

Lints and fixes files
```bash
yarn lint
```

提交时避开eslint的检测机制报错：
git commit --no-verify -m "提交时的注释"

