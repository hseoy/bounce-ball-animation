export default class Ball {
    constructor(screenWidth, screenHeight, color, radius = 50, speed = 13) {
        this.radius = radius;
        this.speedX = speed;
        this.speedY = speed;
        this.color = color;

        this.diameter = this.radius * 2;
        this.pos = {
            x: Math.random() * (screenWidth - this.diameter * 2) + this.diameter,
            y: Math.random() * (screenHeight - this.diameter * 2) + this.diameter
        }
    }

    posAdjust(screenWidth, screenHeight) {
        if (this.pos.x - this.radius < 0) {
            this.pos.x = this.radius;
        } else if (this.pos.x + this.radius >= screenWidth) {
            this.pos.x = screenWidth - this.radius;
        }
        if (this.pos.y - this.raidus < 0) {
            this.pos.y = this.radius;
        } else if (this.pos.y + this.radius >= screenHeight) {
            this.pos.y = screenHeight - this.radius;
        }
    }

    clear(canvasContext) {
        canvasContext.clearRect(this.pos.x - this.radius - 1, this.pos.y - this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);
    }

    draw(canvasContext, screenWidth, screenHeight) {
        this.pos.x += this.speedX;
        this.pos.y += this.speedY;

        this.bounceEdge(screenWidth, screenHeight);

        canvasContext.fillStyle = this.color;
        canvasContext.beginPath();
        canvasContext.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        canvasContext.fill();
    }

    bounceEdge(screenWidth, screenHeight) {
        const minPos = this.radius;
        const maxPosX = screenWidth - this.radius;
        const maxPosY = screenHeight - this.radius;

        if (this.pos.x <= minPos || this.pos.x >= maxPosX) {
            this.speedX *= -1;
            this.pos.x += this.speedX;
        } else if (this.pos.y <= minPos || this.pos.y >= maxPosY) {
            this.speedY *= -1;
            this.pos.y += this.speedY;
        }
    }
}