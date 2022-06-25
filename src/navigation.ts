import robot from 'robotjs';

function getMousePosition() {
    const { x, y } = robot.getMousePos();
    return { x, y };
};

function moveMouseUp(width: number): void {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x, y - width);
}

function moveMouseDown(width: number): void {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x, y + width);
}

function moveMouseLeft(width: number): void {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x - width, y);
}

function moveMouseRight(width: number): void {
    const { x, y } = robot.getMousePos();
    robot.moveMouse(x + width, y);
}

export {
    getMousePosition,
    moveMouseUp,
    moveMouseDown,
    moveMouseLeft,
    moveMouseRight
}