<!-- 
    Webpack configuration referrence.
    https://typescript-kr.github.io/pages/tutorials/react-&-webpack.html
 -->
[![node][node]][node-url] [![npm][npm]][npm-url] [![typescript][typescript]][typescript-url] [![react][react]][react-url]


# A simple boilerplate for frontend
- Self configuration A-Z

## Main stack
- react.js (i :heart: it)
- typescript (i :heart: it to)
- material-ui (optional, not yet)

## What's includeds?
- webpack dev server with [HMR][hmr-url]
- build optimization(to be)
-

### VScode custom setting
[`.vscode/settings.json`](.vscode/settings.json)
```json
{
    "files.exclude": {
        "node_modules/**": true
    },
    "workbench.tree.indent": 4,
    "markdown-preview-enhanced.previewTheme": "github-light.css",
    "oneDarkPro.editorTheme": "onedarkPro",
    "editor.tabSize": 2,
    "workbench.tree.renderIndentGuides": "always",
    "typescript.preferences.quoteStyle": "single",
    "javascript.preferences.quoteStyle": "single",
    "workbench.editor.enablePreview": false,
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "workbench.colorCustomizations": {
        "[Material Theme Palenight High Contrast]": {
        }
    }
}
```
### My VScode extensions
![My VScode extensions](docs/extensions_capture.png)

[node]: https://img.shields.io/badge/node-^12.18.3-green
[node-url]: https://nodejs.org/en/
[npm]:https://img.shields.io/badge/npm-^6.14.6-red
[npm-url]: https://npmjs.com/package/npm
[typescript]: https://img.shields.io/badge/typescript-^4.0.2-blue
[typescript-url]: https://www.npmjs.com/package/typescript
[react]: https://img.shields.io/badge/react-^16.13.1-blue
[react-url]: https://www.npmjs.com/package/react

[hmr-url]: https://webpack.js.org/concepts/hot-module-replacement