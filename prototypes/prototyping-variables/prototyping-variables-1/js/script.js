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

let leaf1 = {
    x: 440,
    y: 80,
    size: 20
}

let leaf2 = {
    x: 200,
    y: 600,
    size: 20
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
    // ellipse(width / 2 + 10, 280, 370, 350)

    fill(130, 80, 50);
    noStroke();
    ellipse(width / 2, 700, 1400, 300);

    fill(110, 60, 30);
    rectMode(CENTER)
    rect(width / 2, 400, 40, 300)

    triangle(400, 300, 400, 350, 300, 200)
    triangle(400, 500, 400, 450, 550, 300)
    triangle(500, 360, 510, 350, 560, 360)

    // fill(220, 80, 30)
    // circle(width / 2, height / 2, 600)
    push()
    angleMode(DEGREES)
    rotate(30)
    fill(tree.r, tree.g, tree.b)
    circle(leaf1.x, leaf1.y, leaf1.size)
    triangle(leaf1.x - 9, leaf1.y - 5, leaf1.x, leaf1.y - 20, leaf1.x + 9, leaf1.y - 5)
    triangle(leaf1.x - 9, leaf1.y + 5, leaf1.x, leaf1.y + 20, leaf1.x + 9, leaf1.y + 5)
    pop()

    push()
    angleMode(DEGREES)
    rotate(-30)
    fill(tree.r, tree.g, tree.b)
    circle(leaf2.x, leaf2.y, leaf2.size)
    triangle(leaf2.x - 9, leaf2.y - 5, leaf2.x, leaf2.y - 20, leaf2.x + 9, leaf2.y - 5)
    triangle(leaf2.x - 9, leaf2.y + 5, leaf2.x, leaf2.y + 20, leaf2.x + 9, leaf2.y + 5)
    pop()
}
function mouseMoved() {
    tree.r += 0.4
    if (tree.r > 220) {
        tree.r = 220
    }

    tree.g -= 0.1
    if (tree.g < 80) {
        tree.g = 80
    }

    tree.b -= 0.2
    if (tree.b < 30) {
        tree.b = 30
    }
}