/*
 * @Date: 2022-04-29 18:16:58
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-04-29 18:41:57
 * @FilePath: /webpack-cli/@webpack-cli-cjs/client/config/webpack.prod.config.js
 * @Description:
 */

const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
function getIPAdress() {
  let interfaces = require("os").networkInterfaces();
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}

module.exports = {
  mode: "production",
  output: {
    publicPath: "./", // dev 服务器需要是绝对，而编译出来需要是相对
    
  },
  watch: true,
  optimization: {
    // 压缩
    minimize: false,
    minimizer: [],
    //  任何字符串：用于设置 process.env.NODE_ENV 的值。
    nodeEnv: "production",
    moduleIds: "named",
    chunkIds: "named",
    // 开启这个编译包更小
    // runtimeChunk: {
    //   name: (entrypoint) => `runtime~${entrypoint.name}`,
    // },
  },
  devtool: "source-map", // 生产环境和开发环境判断
  plugins: [],
};