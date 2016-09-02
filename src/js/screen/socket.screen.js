var host = "http://127.0.0.1:8866";
var io = require("../components/socket.io-client/socket.io.js");
var socket = io(host);
module.exports = socket;