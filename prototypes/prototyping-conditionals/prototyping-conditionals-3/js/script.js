/**
 * Prototyping Conditions 3 : Rage Meter
 * Sydney Tan
 * 
A meter that increases the more keys are typed in succession
...followed by some time to calm down...
...and then by the opportunity to continue to rage
and the cycle continues

 */

"use strict";

//VARIABLES

//variable to detect if the bar is full or not
let chillOut = false

//the rage meter's y variable, starts at the bottom
let bar = {
    y: 1000
}

//page count
let page = 1

//the invisible timer circle's variables
let p = {
    x: 0,
    y: 1000,
    spd: 5
}

/**
*/
function setup() {
    createCanvas(800, 1000)

}


/**
*/
function draw() {
    background(255)

    // print(chillOut)

    //if chillOut is true, start the chill out messages
    if (chillOut) {
        ChillOut()
    }

    //slowly decrease the bar
    bar.y += 0.5

    // print(page)

    //if we're calm enough, return to the rage meter and reset the page count to 0 for the next time the rage meter reaches its limit
    if (chillOut === false) {
        RageMeter()
        page = 1;
    }

    //if we reach the final message, there is no more need to chill and we're ready to return to keyboard smashing
    if (page >= 20) {
        chillOut = false
    }

}

function keyPressed() {
    //when any keyboard key is pressed, the red bar goes up
    bar.y -= 5
}

function RageMeter() {

    //bg of the meter
    rectMode(CORNERS)
    fill(200)
    noStroke()
    rect(350, 0, 450, 1000)

    //red part of the meter
    rectMode(CORNERS)
    fill(255, 0, 0)
    noStroke()
    rect(350, 1000, 450, bar.y)

    // bar.y = mouseY

    //limit the bar's y (bottom)
    if (bar.y > 1000) {
        bar.y = 1000
    }

    //limits the bar's y (top)
    //if the bar becomes completely red, the chill out messages appear
    if (bar.y < 0) {
        bar.y = 0
        chillOut = true
    }
}

function ChillOut() {

    //bg for the chill out messages
    rectMode(CORNER)
    fill(100)
    rect(0, 0, 800, 1000)

    //Page 1
    if (page == 1) {
        textAlign(CENTER, CENTER)
        fill(255)
        textSize(100)
        text("Woah there!", width / 2, height / 2)
    }


    //Page 2
    if (page == 2) {
        textAlign(CENTER, CENTER)
        fill(255)
        textSize(75)
        text("I know...", width / 2, height / 2)
        print("weh")
    }


    //Page 3
    if (page == 3 || page == 4 || page == 5) {
        textAlign(CENTER, CENTER)
        fill(255)
        textSize(30)
        text("There are many things in life that can cause annoyance", width / 2, height / 2,)
    }

    //Last page
    if (page >= 6 && page < 20) {
        textAlign(CENTER, CENTER)
        fill(255)
        textSize(35)
        text("Why don't we take some time to calm down", width / 2, height / 2)
    }

    //Timer:
    //if the chill out messages are on screen, an invisible circle moves towards to right
    noStroke()
    noFill()
    circle(p.x, p.y, 100)
    if (chillOut = true) {
        p.x += 10
    }

    //Page turn:
    //when the circle reaches the end of the screen, the page turns and a new message is displayed
    if (p.x > 800) {
        page++
        p.x = 0
    }

}