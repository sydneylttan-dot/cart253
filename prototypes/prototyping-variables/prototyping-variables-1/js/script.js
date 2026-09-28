/**
 * Prototyping Variables 1
 * Sydney Tan
 */

"use strict";

//VARIABLES
let tree = {
    r: 100,
    g: 190,
    b: 70
}

/**
*/
function setup() {
    createCanvas(800, 800)
}


/**
*/
function draw() {
    background(180, 200, 255);

    fill(tree.r, tree.g, tree.b);
    ellipse(width / 2 + 10, 280, 370, 350)

    fill(130, 80, 50);
    noStroke();
    ellipse(width / 2, 700, 1400, 300);

    fill(110, 60, 30);
    rectMode(CENTER)
    rect(width / 2, 400, 40, 300)

    triangle(400, 300, 400, 350, 300, 200)
    triangle(400, 500, 400, 450, 550, 300)
    triangle(500, 360, 510, 350, 560, 360)

}
function mouseMoved() {
    tree.r += 0.4
    if (tree.r > 255) {
        tree.r = 220
    }

    tree.g -= 0.1
    if (tree.g < 40) {
        tree.g = 40
    }
}