import robot from 'robotjs';

function drawSquare(width: number): void {
    const { x, y } = robot.getMousePos();
    robot.mouseToggle('down');
    robot.moveMouseSmooth(x + width, y);
    robot.moveMouseSmooth(x + width, y + width);
    robot.moveMouseSmooth(x, y + width);
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle('up');
};

function drawRectangle(width: number, length: number): void {
    const { x, y } = robot.getMousePos();
    robot.mouseToggle('down');
    robot.moveMouseSmooth(x + width, y);
    robot.moveMouseSmooth(x + width, y + length);
    robot.moveMouseSmooth(x, y + length);
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle('up');
};

function drawCircle(width: number): void {
    const mousepos = robot.getMousePos();
    for (let i = 0; i <= Math.PI * 2; i += (0.01 * Math.PI)) {
        const x = mousepos.x + (width * Math.cos(i));
        const y = mousepos.y + (width * Math.sin(i));
        robot.mouseToggle('down');
        robot.dragMouse(x - width, y);
        robot.mouseToggle('up');
    };
};

export {
    drawSquare,
    drawCircle,
    drawRectangle
}