let x = 200,
    y = 200,
    balls = [],
    maxBallsNum = 10

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < maxBallsNum; i++) {
        balls.push(new Ball(x, y, 10, "pink"))
    }
}

function draw() {
    background(0, 9);
    for (let i = 0; i < maxBallsNum; i++) {
        balls[i].move()
    }

}

class Ball {
    constructor(xin, yin, radius, color) {
        this.x = xin;
        this.y = yin;
        this.radius = radius
        this.color = color

        this.off1 = random(100),
            this.off2 = random(100),
            this.inc = 0.01;
    }

    move() {
        this.x = noise(this.off1) * 400
        this.y = noise(this.off2) * 400
        noStroke()
        fill(this.color)
        circle(this.x, this.y, this.radius)
        this.off1 += this.inc;
        this.off2 += this.inc;
    }
}