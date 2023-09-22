// random e map


/*
    let x = 0
    function setup() {
    createCanvas(400, 400);
    background(0)
    }

    function draw(){
    let r = random(400)
    let g = map(noise(x), 0, 1, 0, 400)
    x = x + 0.1
    stroke(100, 20, 251, 10)
    fill(100, 20, 251, 10)
    circle(r, 150, 20)
    circle(g, 300, 20)
    console.log(g)
    }
*/
let startX = 0,
    startY = 100,
    endX = 0,
    endY = 300,
    inc = 2

function setup() {
    createCanvas(400, 400);
    background(0);

}

function draw() {
    stroke(255, 255, 255, 100)
    line(startX + map(random(), 0, 1, -2, 2), startY, endX + map(random(), 0, 1, -2, 2), endY)
    startX += inc
    endX += inc
}