//css
require("./components/amazeui/dist/css/amazeui.css");
require("./components/font-awesome/css/font-awesome.css");

require("../scss/index.scss");

// js
require("expose?React!../../node_modules/react/dist/react.js");
require("expose?ReactDOM!../../node_modules/react-dom/index.js");
var socket = require("./screen/socket.screen.js");

var Scroll = require("./screen/scroll.js");

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
    scroll.addData(message);
});