/**
 * 简单的websotck示例
 */

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 2000});

wss.on('connection', function(ws) {
    ws.send('服务端发来一条消息');
    ws.on('message', function(message) {
        //转发一下客户端发过来的消息
        console.log('收到客户端来的消息: %s', message);
        ws.send('服务端收到来自客户端的消息:' + message);
    });
    ws.on('close', function(event) {
        console.log('客户端请求关闭',event);
    });
});