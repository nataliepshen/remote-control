import WebSocket, { createWebSocketStream } from 'ws';
import { moveMouseDown, moveMouseUp } from './navigation';
import { printScreen } from './printScreen';



function connection(ws: WebSocket) {
    const duplex = createWebSocketStream(ws, { decodeStrings: false });
    duplex.on('data', async (chunk: Buffer) => {
        try {
            console.log(chunk.toString());
            const [command, ...pixels] = chunk.toString().split(' ');
            const width: number = +pixels[0];
            const length: number = +pixels[1];
            switch (command) {
                case 'mouse_up': 
                    moveMouseUp(width);
                    duplex.write(command);
                    break;
                case 'mouse_down':
                    moveMouseDown(width);
                    duplex.write
            }
        } catch(err) {
            console.log(err);
        }
    });
    ws.on('close', () => {
        duplex.destroy();
    })
}

export {
    connection
}