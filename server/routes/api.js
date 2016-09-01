/**
 * 和后台数据交互的路由
 *
 * @author bian
 * @createDate 2016.7.2
 */
const proxy = require("koa-proxy");
const config = require("../proxy.json");

module.exports = (router) => {
    router.get("/api/example",proxy({
        host: config.host
    }));
    
    router.get("/api/message",function *() {
        
    });
};