/**
 * Prototyping:Variables 2
 * Sydney Tan
 */

"use strict";

/**

*/

//VARIABLES

let timer

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

let bubbles3 = {
    x: 400,
    y: 900,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255
}

let bubbles4 = {
    x: 400,
    y: 900,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255
}

let bubbles5 = {
    x: 400,
    y: 900,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255
}

let bubbles6 = {
    x: 400,
    y: 900,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255
}

function setup() {
    createCanvas(800, 800);
    timer = 0

    bubbles1.x = random(-100, 900)
    bubbles1.size = random(10, 300)
    bubbles1.r = random(100, 255)
    bubbles1.g = random(100, 255)
    bubbles1.b = random(100, 255)

    bubbles2.x = random(-100, 900)
    bubbles2.size = random(10, 200)
    bubbles2.r = random(100, 255)
    bubbles2.g = random(100, 255)
    bubbles2.b = random(100, 255)

    bubbles3.x = random(20, 780)
    bubbles3.size = random(50, 100)
    bubbles3.r = random(190, 255)
    bubbles3.g = random(100, 150)
    bubbles3.b = random(100, 160)

    bubbles4.x = random(20, 780)
    bubbles4.size = random(100, 300)
    bubbles4.r = random(100, 150)
    bubbles4.g = random(80, 120)
    bubbles4.b = random(100, 160)

    bubbles5.x = random(20, 780)
    bubbles5.size = random(50, 70)
    bubbles5.r = random(50, 80)
    bubbles5.g = random(80, 120)
    bubbles5.b = random(100, 160)

    bubbles6.x = random(100, 700)
    bubbles6.size = random(50, 70)
    bubbles6.r = random(200, 255)
    bubbles6.g = random(200, 255)
    bubbles6.b = random(200, 255)
}


/**
*/
function draw() {
    background(40)
    Bubble();

    timer = timer + 1


    bubbles1.y = bubbles1.y - random(0.1, 1)
    bubbles1.alpha = bubbles1.alpha - random(0.1, 1)
    if (bubbles1.y < 400) {
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
        bubbles2.size = random(10, 200)
        bubbles2.r = random(100, 255)
        bubbles2.g = random(100, 255)
        bubbles2.b = random(100, 255)
    }

    if (timer >= 30) {
        Bubble3();
        bubbles3.y = bubbles3.y - random(0.8, 2)
        bubbles3.alpha = bubbles3.alpha - random(0.1, 0.3)
        bubbles3.r = bubbles3.r + 2
        if (bubbles3.y < -100) {
            bubbles3.y = 1000
            bubbles3.alpha = 255
            bubbles3.x = random(20, 780)
            bubbles3.size = random(50, 100)
            bubbles3.r = random(190, 255)
            bubbles3.g = random(100, 150)
            bubbles3.b = random(100, 160)
        }
    }

    if (timer >= 100) {

        Bubble4();
        bubbles4.y = bubbles4.y - random(0.5, 1.5)
        bubbles4.alpha = bubbles4.alpha - random(0.1, 0.3)
        bubbles4.r = bubbles4.r + 1
        bubbles4.b = bubbles4.b + 2
        if (bubbles4.y < -300) {
            bubbles4.y = 1000
            bubbles4.alpha = 255
            bubbles4.x = random(20, 780)
            bubbles4.size = random(100, 300)
            bubbles4.r = random(100, 150)
            bubbles4.g = random(80, 120)
            bubbles4.b = random(100, 160)
        }
    }

    if (timer >= 150) {
        Bubble5();
        bubbles5.y = bubbles5.y - random(0.5, 1.5)
        bubbles5.alpha = bubbles5.alpha - random(0.1, 0.3)
        bubbles5.r = bubbles5.r + 1
        bubbles5.b = bubbles5.b + 2
        if (bubbles5.y < -300) {
            bubbles5.y = 900
            bubbles5.alpha = 255
            bubbles5.x = random(20, 780)
            bubbles5.size = random(50, 70)
            bubbles5.r = random(50, 80)
            bubbles5.g = random(80, 120)
            bubbles5.b = random(100, 160)
        }
    }

    if (timer >= 200) {
        Bubble6();
        bubbles6.y = bubbles6.y - random(1, 1.5)
        bubbles6.alpha = bubbles6.alpha - random(0.5, 1)
        bubbles6.r = bubbles6.r + 1
        bubbles6.g = bubbles6.g + 1
        bubbles6.b = bubbles6.b + 1
        if (bubbles6.y < -300) {
            bubbles6.y = 900
            bubbles6.alpha = 255
            bubbles6.x = random(20, 780)
            bubbles6.size = random(50, 70)
            bubbles6.r = random(50, 80)
            bubbles6.g = random(80, 120)
            bubbles6.b = random(100, 160)
        }
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

function Bubble3() {
    fill(bubbles3.r, bubbles3.g, bubbles3.b, bubbles3.alpha)
    noStroke()
    circle(bubbles3.x, bubbles3.y, bubbles3.size)
}

function Bubble4() {
    fill(bubbles4.r, bubbles4.g, bubbles4.b, bubbles4.alpha)
    noStroke()
    circle(bubbles4.x, bubbles4.y, bubbles4.size)
}

function Bubble5() {
    fill(bubbles5.r, bubbles5.g, bubbles5.b, bubbles5.alpha)
    noStroke()
    circle(bubbles5.x, bubbles5.y, bubbles5.size)
}

function Bubble6() {
    fill(bubbles6.r, bubbles6.g, bubbles6.b, bubbles6.alpha)
    noStroke()
    circle(bubbles6.x, bubbles6.y, bubbles6.size)
}