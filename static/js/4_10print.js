// random

let spacing = 20,
    x = 0,
    y = 0;


function setup() {
    createCanvas(400, 400);
    background(0, 0, 0)
}

function draw() {
    stroke("white")
    if (random() < 0.5) {
        line(x, y, x + spacing, y + spacing)
    } else {
        line(x, y + spacing, x + spacing, y)
    }

    x += spacing
    if (x === 400) {
        x = 0;
        y += spacing;
    }
}