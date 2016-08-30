/**
 * 网络请求的代码
 * 
 * @author bian
 * @createDate 2016.7.2
 */

var superagentPromisePlugin = require("superagent-promise-plugin");
require("es6-promise").polyfill();
var request = superagentPromisePlugin.patch(require("superagent"));
var charset = require("superagent-charset");
charset(request);

module.exports = request;