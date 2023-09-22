function cartToPolar(x, y) {
    return [Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)), Math.atan(y / x)]
}

function polarToCart(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)]
}

let w = window.innerWidth,
    h = window.innerHeight,
    r = 0,
    g = 0,
    b = 0,
    x = 0;

function setup() {
    createCanvas(w, h);
    background(0);
    r = random(255)
    g = random(255)
    b = random(255)
}

function draw() {
    translate(w / 2, h / 2)
    rotate(x)
    x += 0.01
    strokeWeight(4)
    stroke(
        map(noise(r), 0, 1, 0, 255),
        map(noise(g), 0, 1, 0, 255),
        map(noise(b), 0, 1, 0, 255)
    )

    r += 0.01;
    g += 0.01;
    b += 0.01;


    /*
        beautiful visual
        let p = polarToCart(frameCount*0.2, frameCount*0.1)
        point(p[0], p[1]) 
    */

    /* remainders of 6 */
    if (frameCount % 6 === 0 || frameCount % 6 === 2) {
        let p = polarToCart(frameCount, frameCount)
        point(
            map(p[0], 0, 10000, 0, width),
            map(p[1], 0, 10000, 0, width),
        )
    }



}