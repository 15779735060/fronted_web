### 配置package
&emsp;&emsp;关于package的配置在前面已经讲过了，这里就不逐一讲解了，[传送门](/Webpack/核心/package文件说明.html)
```json
{
  "name": "super-toolkit",
  "version": "1.0.4",
  "description": "一个轻量级的javaScript超级工具库",
  "main": "lib/super-toolkit.min.js",
  "scripts": {
    "build": "webpack --config webpack.config.js"
  },
  "types": "index.d.ts",
  "keywords": [],
  "author": "yanxiufei",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.22.11",
    "@babel/preset-env": "^7.22.10",
    "@babel/preset-typescript": "^7.22.11",
    "babel-loader": "^9.1.3",
    "clean-webpack-plugin": "^4.0.0",
    "terser-webpack-plugin": "^5.3.9",
    "typescript": "^5.2.2",
    "webpack": "^5.88.2",
    "webpack-cli": "^5.1.4"
  },
  "browserslist": [
    "defaults",
    "not ie < 8",
    "last 3 versions",
    "> 0.2%",
    "iOS 7",
    "last 3 iOS versions"
  ]
}

```