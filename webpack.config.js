/**
 * 部署用webpack.config.js
 *
 * @author bian
 * @createDate 2016.7.2
 */
"use strict";

var genConf = require("./make-webpack.config");
module.exports = genConf({debug: false});
