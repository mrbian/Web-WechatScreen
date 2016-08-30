/**
 * 路由demo文件
 *
 * @author bian
 * @createDate 2016.7.2
 */
var render = require("../instances/render");

module.exports = (router) => {
   router.get("/home",function *(){
       var ctx = this;
       ctx.body = yield render("example.html");
   });
};