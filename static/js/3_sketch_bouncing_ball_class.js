// class e vectors

let balls = [],
    numBalls = 2,
    w = 400,
    h = 400

class Walker {
    constructor(diameter) {
        this.p = createVector(random(400), random(400))
        this.s = createVector(0, 0)
        this.a = createVector(0.01, 0.01)
        this.diameter = diameter
    }

    move() {
        this.p.add(this.s)
        this.s.add(this.a)
        if (this.p.x >= 400 + this.diameter / 2) {
            this.p.x = -this.diameter / 2
        }

        if (this.p.y >= 400 + this.diameter / 2) {
            this.p.y = -this.diameter / 2
        }
    }

    draw() {
        circle(this.p.x, this.p.y, this.diameter)
    }
}

function setup() {
    createCanvas(w, h);
    background(255, 0, 0)
    for (let i = 0; i < numBalls; i++) {
        balls.push(new Walker(random(20, 40)))
    }
}



function draw() {
    background(255, 0, 0)
    noStroke()
    balls.forEach(b => {
        b.move()
        b.draw()
    })

}