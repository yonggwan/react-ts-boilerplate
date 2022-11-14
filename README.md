<!--
    Webpack configuration referrence.
    https://typescript-kr.github.io/pages/tutorials/react-&-webpack.html

    eslint + prettier configuration referrence.
    https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 -->

[![typescript][typescript]][typescript-url] [![react][react]][react-url]

# React typescript boilerplate
Typescript based quick start template for new react project

- This will help my fast prototyping

## Dependencies

<ol>
  <li>react.js</li>
  <li>typescript</li>
  <li>css-in-js (jss)</li>
  <li>material-ui</li>
</ol>

## install & start

```sh
yarn && yarn start
```

then open `http://localhost:3000/`

## Build scripts

```bash
yarn run build:dev
yarn run build:prod
```

## What's includeds?

- webpack dev server with [HMR][hmr-url]
- eslint + prettier (auto formatting)
- vscode setting file (theme, etc configs)
- build optimization (next feature)
  chunk/tree-shake/minify

### VScode custom setting

[.vscode/settings.json](./docs/vscode_settings.json.md)
VSCode Theme: `One Dark Pro`

### My VScode extensions

![My VScode extensions](docs/extensions_capture.png)

[node]: https://img.shields.io/badge/node-^12.18.3-green
[node-url]: https://nodejs.org/en/
[npm]: https://img.shields.io/badge/npm-^6.14.6-red
[npm-url]: https://npmjs.com/package/npm
[typescript]: https://img.shields.io/badge/typescript-^4.0.2-blue
[typescript-url]: https://www.npmjs.com/package/typescript
[react]: https://img.shields.io/badge/react-^18.20.0-blue
[react-url]: https://www.npmjs.com/package/react
[hmr-url]: https://webpack.js.org/concepts/hot-module-replacement
