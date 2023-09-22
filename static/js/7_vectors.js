class Mover {
    constructor(accX, accY) {
        this.location = createVector(
            random(400),
            random(400)
        )
        this.speed = createVector(0, 0)
        this.diameter = random(10, 20)
        this.acceleration = createVector(accX, accY)
        this.maxSpeed = 6
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)
    }

    move() {
        this.updatePosition()
        // this.checkEdges()
        this.draw()
    }

    limitSpeed() {
        if (this.speed.mag() > this.maxSpeed) {
            console.log("Limiting Speed!")
            this.speed.normalize()
            this.speed.mult(this.maxSpeed)
        }
    }

    updateAcceleration(v) {
        this.acceleration = v
    }

    updatePosition() {
        this.speed.add(this.acceleration)
        this.limitSpeed()
        this.location.add(this.speed)
    }

    checkEdges() {
        if (this.location.x <= 0) {
            this.location.x = window.innerWidth
        } else if (this.location.x >= window.innerWidth) {
            this.location.x = 0
        }

        if (this.location.y <= 0) {
            this.location.y = window.innerHeight
        } else if (this.location.y >= window.innerHeight) {
            this.location.y = 0
        }
    }

    draw() {
        noStroke()
        fill(this.r, this.g, this.b)
        circle(this.location.x, this.location.y, this.diameter)
    }
}

let w = window.innerWidth,
    h = window.innerHeight,
    l = [],
    mouse

function setup() {
    for (let i = 0; i < 50; i++) {
        l.push(new Mover(0.01, 0.005))
    }
    createCanvas(w, h);
}

function draw() {
    background(0, 5);

    mouse = createVector(mouseX, mouseY)
    for (let i = 0; i < l.length; i++) {
        let m = l[i]
        diff = p5.Vector.sub(mouse, m.location)
        diff.normalize()
        diff.mult(0.05)

        stroke("white")
        m.updateAcceleration(diff)
        m.move()
    }
}
