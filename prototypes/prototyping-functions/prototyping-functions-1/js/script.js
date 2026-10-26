/**
 * Prototyping: Functions 1 : Better Bubbles
 * Sydney Tan
 * 
 * Reworked version of one of the prototypes for prototyping variables
 * Line count went from 282 to 170 lines
 * Replaced lines of code that were previously in the draw function with functions with parameters ()
 * 
 * Previous project description:
 * A project where u watch multicoloured bubbles ascend
 * uses a lot of randoms and variables
 * wouldve probably been better with a shorter canvas (i did that i did that :D)
 */

"use strict";

/**

*/

//VARIABLES

//timer so some of the bubbles' arrival can be slightly delayed
let timer = 0

// bubbles variables: set initial x position, y, size, red value, greeen value, blue value, alpha, the min value of size cahnges and the max value of size changes

let bubbles1 = {
    x: 567,
    y: 500,
    size: 200,
    r: 200,
    g: 230,
    b: 100,
    alpha: 255,
    randomMin: 10,
    randomMax: 200
}

let bubbles2 = {
    x: 453,
    y: 560,
    size: 100,
    r: 120,
    g: 160,
    b: 240,
    alpha: 255,
    randomMin: 10,
    randomMax: 100
}

let bubbles3 = {
    x: 875,
    y: 430,
    size: 60,
    r: 242,
    g: 165,
    b: 195,
    alpha: 255,
    randomMin: 50,
    randomMax: 100
}

let bubbles4 = {
    x: 324,
    y: 540,
    size: 40,
    r: 100,
    g: 255,
    b: 124,
    alpha: 255,
    randomMin: 70,
    randomMax: 130
}

let bubbles5 = {
    x: 764,
    y: 470,
    size: 40,
    r: 210,
    g: 236,
    b: 253,
    alpha: 255,
    randomMin: 20,
    randomMax: 80
}

let bubbles6 = {
    x: 213,
    y: 420,
    size: 130,
    r: 247,
    g: 129,
    b: 121,
    alpha: 255,
    randomMin: 50,
    randomMax: 150
}

//create canvas (canvas size was changed from 800, 800 to 1000, 400 in this version of the project)
function setup() {
    createCanvas(1000, 400);
}


/**
 * calls functions with variables as parameters, increases the timer count when the project starts
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

//increases the bubbles' y value and decreases its alpha, resets its position, randomizes its size and changes its colour when it reaches y 100
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

//draws the bubbles
function bubblesDraw(bubble) {
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha)
    noStroke()
    circle(bubble.x, bubble.y, bubble.size)
}