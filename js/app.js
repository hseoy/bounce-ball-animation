import Ball from "./ball";

let screenWidth = 0;
let screenHeight = 0;
let parentElement = null;
let ballObject = null;
const canvas = document.createElement('canvas');
const canvasContext = canvas.getContext('2d');

export function bounceBallAnimation(parent = document.body, ballColor = '#000', ballRadius = 50, ballSpeed = 30) {
    parentElement = parent;
    screenWidth = parentElement?.clientWidth;
    screenHeight = parentElement?.clientHeight;

    parentElement?.appendChild(canvas);

    ballObject = new Ball(screenWidth, screenHeight, ballColor, ballRadius, ballSpeed);

    addEventListener('resize', resizeCanvas, false);
    requestAnimationFrame(animate);
    resizeCanvas();
}

const resizeCanvas = () => {
    screenWidth = parentElement?.clientWidth;
    screenHeight = parentElement?.clientHeight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;

    ballObject?.posAdjust(screenWidth, screenHeight);
}

const animate = () => {
    requestAnimationFrame(animate);
    ballObject?.clear(canvasContext);
    ballObject?.draw(canvasContext, screenWidth, screenHeight);
}