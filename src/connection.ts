import WebSocket, { createWebSocketStream } from 'ws';
import { drawCircle, drawRectangle, drawSquare } from './drawing';
import { getMousePosition, moveMouseDown, moveMouseLeft, moveMouseRight, moveMouseUp } from './navigation';
import { printScreen } from './printScreen';

function connection(ws: WebSocket): void {
    const duplex = createWebSocketStream(ws, { encoding: 'utf-8', decodeStrings: false });
    duplex.on('data', async (chunk: Buffer) => {
        try {
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
                    duplex.write(command);
                    break;
                case 'mouse_left':
                    moveMouseLeft(width);
                    duplex.write(command);
                    break;
                case 'mouse_right':
                    moveMouseRight(width);
                    duplex.write(command);
                    break;
                case 'mouse_position':
                    const { x, y } = getMousePosition();
                    duplex.write(`mouse_position ${x},${y}\0`);
                    break;
                case 'draw_circle':
                    drawCircle(width);
                    duplex.write(command);
                    break;
                case 'draw_rectangle':
                    drawRectangle(width, length);
                    duplex.write(command);
                    break;
                case 'draw_square':
                    drawSquare(width);
                    duplex.write(command);
                    break;
                case 'prnt_scrn':
                    const base64 = await printScreen();
                    duplex.write(`prnt_scrn ${base64}\0`);
                    break;
            };
            console.log(`Received: ${chunk.toString()}. The execution was successful!`);
        } catch(err) {
            console.log(`Received: ${chunk.toString()}. An error has occured!`);
        };
    });
    ws.on('close', () => {
        duplex.destroy();
    });
};

export {
    connection
}