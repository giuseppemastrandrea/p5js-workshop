// basics

let w = 400         // larghezza canvas
let h = 400         // altezza canvas
let x = 0           // posizione sull'asse x
let y = 0           // posizione sull'asse y
let d = 10          // diametro del circle
let speedX = 1
let speedY = 1


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
}


function draw() {
    background(255, 0, 0)
    noStroke()

    circle(x, y, d)

    x = x + 3
    if (x > (width + d / 2)) {
        x = - d / 2
    }
    if (x < -d / 2) {
        x = width + d / 2
    }

    y = y - 4

    if (y > (height + d / 2)) {
        y = - d / 2
    }
    if (y < 0) {
        y = height + d / 2
    }
}