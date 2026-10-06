/**
 * Prototyping Conditions 3 : Rage Meter
 * Sydney Tan
 * 
A meter that increases the more keys are typed in succession
 */

"use strict";

let chillOut = false

let bar = {
    y: 1000
}

let page = 1

let p = {
    x: 0,
    y: 1000,
    spd: 5
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 1000)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255)

    print(chillOut)

    if (chillOut) {
        ChillOut()
    }

    //slowly decrease the bar
    bar.y += 0.5

    // print(page)

    if (chillOut === false) {
        RageMeter()
        page = 1;
    }

    if (page >= 20) {
        chillOut = false
    }

}

function keyPressed() {
    bar.y -= 5
}

function RageMeter() {
    rectMode(CORNERS)
    fill(200)
    noStroke()
    rect(350, 0, 450, 1000)

    rectMode(CORNERS)
    fill(255, 0, 0)
    noStroke()
    rect(350, 1000, 450, bar.y)

    // bar.y = mouseY

    //limit the bar's y
    if (bar.y > 1000) {
        bar.y = 1000
    }

    if (bar.y < 0) {
        bar.y = 0
        chillOut = true
    }
}

function ChillOut() {
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

    if (page >= 6 && page < 20) {
        textAlign(CENTER, CENTER)
        fill(255)
        textSize(35)
        text("Why don't we take some time to calm down", width / 2, height / 2)
    }

    //Timer
    noStroke()
    noFill()
    circle(p.x, p.y, 100)

    if (chillOut = true) {
        p.x += 10
    }

    //Page turn
    if (p.x > 800) {
        page++
        p.x = 0
    }

}