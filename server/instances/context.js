/**
 * 存储上下文
 *
 * @author bian
 * @createDate 2016.7.2
 */
var ctx;
module.exports = {
    get : () => {
        return ctx;
    },
    set : (context) => {
        ctx = context;
    }
};