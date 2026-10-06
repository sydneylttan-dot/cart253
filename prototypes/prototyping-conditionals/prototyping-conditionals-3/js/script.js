/**
 * Prototyping Conditions 3 : Rage Meter
 * Sydney Tan
 * 
A meter that increases the more keys are typed in succession
 */

"use strict";


let bar = {
    y: 1000
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(100, 1000)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200)

    rectMode(CORNERS)
    fill(255, 0, 0)
    noStroke()
    rect(0, 1000, 100, bar.y)

    // bar.y = mouseY

    //limit the bar's y
    if (bar.y > 1000) {
        bar.y = 1000
    }

    if (bar.y < 0) {
        bar.y = 0
        ChillOut()
    }

    //slowly decrease the bar
    bar.y += 0.5

}

function keyPressed() {
    bar.y -= 5
}

function ChillOut() {

}