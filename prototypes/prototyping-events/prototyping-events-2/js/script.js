/**
 * Prototyping Events 2: Morning Routine
 * Sydney Tan
 * 
 * Curtains that go up/down when the mouse wheel is scrolled
 * 
 * Controls:
 * Mouse wheel
 * 
 * Inspired by the curtains that I have at home
 */

"use strict";

//VARIABLES

//variables that control the alpha of the curtains
let curtainsAlpha = {
    a1: 255,
    a2: 255,
    a3: 255,
    a4: 255,
    a5: 255,
    a6: 255,
    a7: 255,
    a8: 255
}

//determines the y of the curtain lines
let curtainLines = {
    y: 400
}

//int that goes up/down depending on the mouse wheel
//goes from 0-8
let curtainLvl = 0

/**
 * draws the canvas
*/
function setup() {
    createCanvas(800, 700)
}


/**
 * draws the bg and the floor, and calls the curtains function
*/
function draw() {
    background(200, 150, 150)

    //draws the floor
    fill(255)
    noStroke()
    quad(0, 700, 800, 700, 600, 500, 200, 500)

    //draws the window frame
    rectMode(CENTER)
    rect(width / 2, 250, 380, 330)

    //draws the window
    fill(255, 220, 220)
    rect(width / 2, 250, 330, 280)

    curtains()

    // print(curtainLvl)

}

//function that draws the curtains and changes the curtains' alpha according to curtainLvl
//caps curtainLvl from 0-8
function curtains() {

    //draws rectangle at the top of the curtains
    fill(150, 100, 100)
    rect(width / 2, 80, 400, 30)

    //draws curtain lines
    strokeWeight(5)
    stroke(150, 100, 100)
    line(280, 80, 280, curtainLines.y)
    line(520, 80, 520, curtainLines.y)

    //draws curtains
    noStroke()
    fill(180, 130, 130, curtainsAlpha.a1)
    rect(width / 2, 120, 390, 30)

    fill(180, 130, 130, curtainsAlpha.a2)
    rect(width / 2, 160, 390, 30)

    fill(180, 130, 130, curtainsAlpha.a3)
    rect(width / 2, 200, 390, 30)

    fill(180, 130, 130, curtainsAlpha.a4)
    rect(width / 2, 240, 390, 30)

    fill(180, 130, 130, curtainsAlpha.a5)
    rect(width / 2, 280, 390, 30)

    fill(180, 130, 130, curtainsAlpha.a6)
    rect(width / 2, 320, 390, 30)

    fill(180, 130, 130, curtainsAlpha.a7)
    rect(width / 2, 360, 390, 30)

    fill(180, 130, 130, curtainsAlpha.a8)
    rect(width / 2, 400, 390, 30)

    //controls the alpha according to curtainLvl
    //controls the curtain lines y as well
    if (curtainLvl < 0) {
        curtainsAlpha.a1 = 0
        curtainsAlpha.a2 = 0
        curtainsAlpha.a3 = 0
        curtainsAlpha.a4 = 0
        curtainsAlpha.a5 = 0
        curtainsAlpha.a6 = 0
        curtainsAlpha.a7 = 0
        curtainsAlpha.a8 = 0

        curtainLvl = 0

        curtainLines.y = 80
    }

    if (curtainLvl === 1) {
        curtainsAlpha.a1 = 255
        curtainsAlpha.a2 = 0
        curtainsAlpha.a3 = 0
        curtainsAlpha.a4 = 0
        curtainsAlpha.a5 = 0
        curtainsAlpha.a6 = 0
        curtainsAlpha.a7 = 0
        curtainsAlpha.a8 = 0

        curtainLines.y = 120
    }

    if (curtainLvl === 2) {
        curtainsAlpha.a1 = 255
        curtainsAlpha.a2 = 255
        curtainsAlpha.a3 = 0
        curtainsAlpha.a4 = 0
        curtainsAlpha.a5 = 0
        curtainsAlpha.a6 = 0
        curtainsAlpha.a7 = 0
        curtainsAlpha.a8 = 0

        curtainLines.y = 160
    }

    if (curtainLvl === 3) {
        curtainsAlpha.a1 = 255
        curtainsAlpha.a2 = 255
        curtainsAlpha.a3 = 255
        curtainsAlpha.a4 = 0
        curtainsAlpha.a5 = 0
        curtainsAlpha.a6 = 0
        curtainsAlpha.a7 = 0
        curtainsAlpha.a8 = 0

        curtainLines.y = 200
    }

    if (curtainLvl === 4) {
        curtainsAlpha.a1 = 255
        curtainsAlpha.a2 = 255
        curtainsAlpha.a3 = 255
        curtainsAlpha.a4 = 255
        curtainsAlpha.a5 = 0
        curtainsAlpha.a6 = 0
        curtainsAlpha.a7 = 0
        curtainsAlpha.a8 = 0

        curtainLines.y = 240
    }

    if (curtainLvl === 5) {
        curtainsAlpha.a1 = 255
        curtainsAlpha.a2 = 255
        curtainsAlpha.a3 = 255
        curtainsAlpha.a4 = 255
        curtainsAlpha.a5 = 255
        curtainsAlpha.a6 = 0
        curtainsAlpha.a7 = 0
        curtainsAlpha.a8 = 0

        curtainLines.y = 280
    }

    if (curtainLvl === 6) {
        curtainsAlpha.a1 = 255
        curtainsAlpha.a2 = 255
        curtainsAlpha.a3 = 255
        curtainsAlpha.a4 = 255
        curtainsAlpha.a5 = 255
        curtainsAlpha.a6 = 255
        curtainsAlpha.a7 = 0
        curtainsAlpha.a8 = 0

        curtainLines.y = 320
    }

    if (curtainLvl === 7) {
        curtainsAlpha.a1 = 255
        curtainsAlpha.a2 = 255
        curtainsAlpha.a3 = 255
        curtainsAlpha.a4 = 255
        curtainsAlpha.a5 = 255
        curtainsAlpha.a6 = 255
        curtainsAlpha.a7 = 255
        curtainsAlpha.a8 = 0

        curtainLines.y = 360
    }

    if (curtainLvl >= 8) {
        curtainsAlpha.a1 = 255
        curtainsAlpha.a2 = 255
        curtainsAlpha.a3 = 255
        curtainsAlpha.a4 = 255
        curtainsAlpha.a5 = 255
        curtainsAlpha.a6 = 255
        curtainsAlpha.a7 = 255
        curtainsAlpha.a8 = 255

        curtainLvl = 8

        curtainLines.y = 400
    }
}

//mouse wheel function that increases/decreases an int (curtainLvl) 
//when the mouse wheel is scrolled up, curtainLvl goes up
//when the mouse wheel is scrolled down, curtainLvl goes down
function mouseWheel(event) {
    if (event.delta > 0) {
        curtainLvl++
    }

    if (event.delta < 0) {
        curtainLvl--
    }
}