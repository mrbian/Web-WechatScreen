//css
require("./components/amazeui/dist/css/amazeui.css");
require("./components/font-awesome/css/font-awesome.css");

require("../scss/index.scss");

// js
require("expose?React!../../node_modules/react/dist/react.js");
require("expose?ReactDOM!../../node_modules/react-dom/index.js");
var socket = require("./screen/socket.screen.js");

var Scroll = require("./screen/scroll.js");

var messages = []; // 本地存储消息
var idx = -1;    // 本地存储消息已经读取到的idx地址

var scroll = ReactDOM.render(
    <Scroll />,
    document.getElementById("scroll")
);

socket.on("connect", function () {
    console.log("connected");
});

socket.on("disconnect", function () {
    console.log("disconnect");
});


socket.on("message", function (data) {
    console.log("get message");
    var message = {
        nickName: data.userInfo.nickName,
        headImg: data.userInfo.headImg,
        content: data.content,
        id: data.id
    };
    messages.push(message);
});

var scrollInterval = setInterval(function(){
    if(idx === messages.length - 1){   // 如果已经读到最后一个
        return;
    }
    idx += 1;
    scroll.addData(messages[idx]);
},2500);