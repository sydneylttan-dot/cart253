/**
 * Prototyping: Functions 1 : Better Bubbles
 * Sydney Tan
 * 
 * Reworked version of one of the prototypes for prototyping variables
 * 
 * Previous project description:
 * A project where u watch multicoloured bubbles ascend
 * uses a lot of randoms and variables
 * wouldve probably been better with a shorter canvas
 */

"use strict";

/**

*/

//VARIABLES

//timer so some of the bubbles' arrival can be slightly delayed
let timer = 0

let bubbles1 = {
    x: 400,
    y: 500,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255,
    randomMin: 10,
    randomMax: 200
}

let bubbles2 = {
    x: 400,
    y: 560,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255,
    randomMin: 10,
    randomMax: 100
}

let bubbles3 = {
    x: 400,
    y: 430,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255,
    randomMin: 50,
    randomMax: 100
}

let bubbles4 = {
    x: 400,
    y: 540,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255,
    randomMin: 70,
    randomMax: 130
}

let bubbles5 = {
    x: 400,
    y: 470,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255,
    randomMin: 20,
    randomMax: 80
}

let bubbles6 = {
    x: 400,
    y: 420,
    size: 40,
    r: 100,
    g: 100,
    b: 100,
    alpha: 255,
    randomMin: 50,
    randomMax: 150
}

//bubbles' inital values are set up here
//timer's value is set to 0
//each of the bubbles have slightly different initial values
//most are randomized
function setup() {
    createCanvas(1000, 400);
}


/**
 * draws the bubbles
 * moves the bubbles
 * adds new bubbles when the old one has left the canvas
*/
function draw() {
    background(40)


    //timer's value increases
    timer = timer + 1

    if (timer >= 0) {
        bubblesMove(bubbles1)
        bubblesDraw(bubbles1)
    }

    if (timer >= 20) {
        bubblesMove(bubbles2)
        bubblesDraw(bubbles2)
    }

    if (timer >= 30) {
        bubblesMove(bubbles3)
        bubblesDraw(bubbles3)
    }

    if (timer >= 50) {
        bubblesMove(bubbles4)
        bubblesDraw(bubbles4)
    }

    if (timer >= 80) {
        bubblesMove(bubbles5)
        bubblesDraw(bubbles5)
    }

    if (timer >= 100) {
        bubblesMove(bubbles6)
        bubblesDraw(bubbles6)
    }

}

function bubblesMove(bubble) {

    bubble.y = bubble.y - random(0.1, 1)
    bubble.alpha = bubble.alpha - random(0.1, 1)
    if (bubble.y < 100) {
        bubble.y = 450
        bubble.alpha = 255
        bubble.x = random(0, 1000)
        bubble.size = random(bubble.randomMin, bubble.randomMax)
        bubble.r = random(100, 255)
        bubble.g = random(100, 255)
        bubble.b = random(100, 255)
    }

}

function bubblesDraw(bubble) {
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha)
    noStroke()
    circle(bubble.x, bubble.y, bubble.size)
}


// //bubble functions that draw the initial bubble when added to draw
// //all of them r the same except for the bubble number associated with them
// function Bubble() {
//     fill(bubbles1.r, bubbles1.g, bubbles1.b, bubbles1.alpha)
//     noStroke()
//     circle(bubbles1.x, bubbles1.y, bubbles1.size)
// }

// function Bubble2() {
//     fill(bubbles2.r, bubbles2.g, bubbles2.b, bubbles2.alpha)
//     noStroke()
//     circle(bubbles2.x, bubbles2.y, bubbles2.size)
// }

// function Bubble3() {
//     fill(bubbles3.r, bubbles3.g, bubbles3.b, bubbles3.alpha)
//     noStroke()
//     circle(bubbles3.x, bubbles3.y, bubbles3.size)
// }

// function Bubble4() {
//     fill(bubbles4.r, bubbles4.g, bubbles4.b, bubbles4.alpha)
//     noStroke()
//     circle(bubbles4.x, bubbles4.y, bubbles4.size)
// }

// function Bubble5() {
//     fill(bubbles5.r, bubbles5.g, bubbles5.b, bubbles5.alpha)
//     noStroke()
//     circle(bubbles5.x, bubbles5.y, bubbles5.size)
// }

// function Bubble6() {
//     fill(bubbles6.r, bubbles6.g, bubbles6.b, bubbles6.alpha)
//     noStroke()
//     circle(bubbles6.x, bubbles6.y, bubbles6.size)
// }