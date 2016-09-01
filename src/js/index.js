//css
require("./components/amazeui/dist/css/amazeui.css");
require("./components/font-awesome/css/font-awesome.css");

require("../scss/index.scss");

// js
require("expose?React!../../node_modules/react/dist/react.js");
require("expose?ReactDOM!../../node_modules/react-dom/index.js");

var ScrollList = require("./screen/scrollList.js");

var scrollList = ReactDOM.render(
    <ScrollList />,
    document.getElementById("content")
);