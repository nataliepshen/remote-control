import {httpServer} from './src/http_server/index';
import WebSocket, { WebSocketServer, createWebSocketStream } from 'ws';
import { drawCircle, drawRectangle, drawSquare } from './src/drawing';
import { printScreen } from './src/printScreen';
import { connection } from './src/connection';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({
    port: 8080,
});

const ws = new WebSocket('ws:/localhost');

wss.on('connection', connection);

console.log('WS server is running in port 8080');