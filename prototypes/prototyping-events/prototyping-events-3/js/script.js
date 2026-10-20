/**
 * Prototyping Events 3:
 * Sydney Tan
 * 
 * making my desk, mouse pressed on specific elements turn devices/lamps on and off
 * 
 */

"use strict";

let pcScreen = {
    r: 170,
    g: 220,
    b: 255,
    on: false
}

let lampLight = {
    a: 0,
    on: false
}

/**
*/
function setup() {
    createCanvas(800, 700)
}


/**
*/
function draw() {
    background(220, 200, 200)

    rectMode(CORNER)
    noStroke()
    fill(200, 150, 100)
    rect(0, 600, 800, 200)

    pc()
    lamp()

}

function pc() {

    fill(40)
    rectMode(CENTER)
    rect(width / 2, 560, 50, 80)
    rect(width / 2, 590, 100, 20)
    rect(width / 2, 400, 400, 300)

    fill(pcScreen.r, pcScreen.g, pcScreen.b)
    rect(width / 2, 400, 350, 250)

    fill(40)
    rectMode(CORNERS)
    rect(650, 600, 770, 300)

}

function lamp() {

    fill(250, 250, 200, lampLight.a)
    quad(170, 215, 120, 250, 230, 600, 580, 600)

    fill(240, 230, 230)
    rectMode(CORNER)
    rect(20, 580, 100, 20)
    stroke(240, 230, 230)
    strokeWeight(5)
    line(70, 580, 50, 400)
    line(50, 400, 100, 200)
    circle(125, 205, 50)
    quad(100, 210, 140, 185, 170, 215, 120, 250)

}

function mouseClicked() {
    if (mouseX > 650 && mouseX < 770 && mouseY < 600 && mouseY > 300) {
        if (pcScreen.on === true) {
            pcScreen.r = 170
            pcScreen.g = 220
            pcScreen.b = 255
            pcScreen.on = false
        }
        else if (pcScreen.on === false) {
            pcScreen.r = 50
            pcScreen.g = 50
            pcScreen.b = 50
            pcScreen.on = true
        }
    }

    if (mouseX > 20 && mouseX < 120 && mouseY > 580 && mouseY < 600) {
        if (lampLight.on === true) {
            lampLight.a = 0
            lampLight.on = false
        }
        else if (lampLight.on === false) {
            lampLight.a = 100
            lampLight.on = true
        }
    }

}