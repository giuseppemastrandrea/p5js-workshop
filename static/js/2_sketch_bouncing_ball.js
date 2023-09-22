// basics

let w = 400         // larghezza canvas
let h = 400         // altezza canvas
let x = 0           // posizione sull'asse x
let y = 0           // posizione sull'asse y
let d = 10          // diametro del circle

let x2 = 0;
let y2 = 0;
let d2 = 10

let speedX = 1
let speedY = 1

let speedX2 = 1
let speedY2 = 1


function checkSpeed(posizione, limite, velocita) {
    if (posizione <= 0 || posizione >= limite) {
        console.log("SONO NELLA FUNZIONE!")
        console.log("CAMBIO DIREZIONE")
        console.log(x)
        velocita = -1 * velocita
    }
    return velocita
}

function setup() {
    createCanvas(w, h);
    background(255, 0, 0)
    x = random(w)
    y = random(h)
    x2 = random(w)
    y2 = random(h)
}



function draw() {
    background(255, 0, 0)
    noStroke()

    circle(x, y, d)
    circle(x2, y2, d2)

    x = x + speedX
    x2 = x2 + speedX2
    speedX = checkSpeed(x, w, speedX)
    speedX2 = checkSpeed(x2, w, speedX2)

    y = y + speedY
    y2 = y2 + speedY2
    speedY = checkSpeed(y, h, speedY)
    speedY2 = checkSpeed(y2, h, speedY2)

    stroke("green")
    strokeWeight(1)
    line(x, y, x2, y2)
}