/**
 * Prototyping:Variables 2
 * Sydney Tan
 */

"use strict";

/**

*/

//VARIABLES

let bubbles1 = {
    x: 400,
    y: 700,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255
}

let bubbles2 = {
    x: 400,
    y: 700,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255
}

function setup() {
    createCanvas(800, 800);
    bubbles1.x = random(-100, 900)
    bubbles1.size = random(10, 400)
    bubbles1.r = random(100, 255)
    bubbles1.g = random(100, 255)
    bubbles1.b = random(100, 255)

    bubbles2.x = random(-100, 900)
    bubbles2.size = random(10, 400)
    bubbles2.r = random(100, 255)
    bubbles2.g = random(100, 255)
    bubbles2.b = random(100, 255)
}


/**
*/
function draw() {
    background(40)
    Bubble();

    bubbles1.y = bubbles1.y - random(0.1, 1)
    bubbles1.alpha = bubbles1.alpha - random(0.1, 1)
    if (bubbles1.y < 300) {
        bubbles1.y = 1000
        bubbles1.alpha = 255
        bubbles1.x = random(-100, 900)
        bubbles1.size = random(10, 400)
        bubbles1.r = random(100, 255)
        bubbles1.g = random(100, 255)
        bubbles1.b = random(100, 255)
    }

    Bubble2();
    bubbles2.y = bubbles2.y - random(0.7, 1)
    bubbles2.alpha = bubbles2.alpha - random(0.1, 0.6)
    if (bubbles2.y < 0) {
        bubbles2.y = 1000
        bubbles2.alpha = 255
        bubbles2.x = random(-100, 900)
        bubbles2.size = random(10, 400)
        bubbles2.r = random(100, 255)
        bubbles2.g = random(100, 255)
        bubbles2.b = random(100, 255)
    }
}

function Bubble() {
    fill(bubbles1.r, bubbles1.g, bubbles1.b, bubbles1.alpha)
    noStroke()
    circle(bubbles1.x, bubbles1.y, bubbles1.size)
}

function Bubble2() {
    fill(bubbles2.r, bubbles2.g, bubbles2.b, bubbles2.alpha)
    noStroke()
    circle(bubbles2.x, bubbles2.y, bubbles2.size)
}