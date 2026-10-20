/**
 * Prototyping Events 3: Daily Life
 * Sydney Tan
 * 
 * A simplified version of my desk's setup with an interactable lamp, pc and room lights
 * 
 * Controls:
 * Mouse clicks: can click on the pc and the lamp to turn those elements on
 *               can click outside of those to turn the room lights on and off
 * 
 * Inspiration:
 * I was having trouble coming up with another prototype idea so I looked around my room and decided to make the first thing that came to min
 * ... which was my room
 * 
 * concept:
 * making my desk, mouse pressed on specific elements turn devices/lamps on and off
 * 
 */

"use strict";

//VARIABLES

//pc screen colour variables and bool that indicates if the pc is turned on or off (used by mouseClicked to see which action should be done)
let pcScreen = {
    r: 170,
    g: 220,
    b: 255,
    on: true,
    a: 0
}

//lamp light alpha variable and bool that indicates if the lamp is on (works in the same way as the pc bool)
let lampLight = {
    a: 0,
    on: false
}

//bool that indicates if the room lights are turned on or off (works in the same way as the pc and lamp on bools)
//additional bool that detects if the mouse is hovering above the pc or lamp
let roomLight = {
    a: 0,
    on: true,
    hover: false
}

/**
 * creates the canvas
*/
function setup() {
    createCanvas(800, 700)
}


/**
 * draws the background (desk included) and calls the functions
*/
function draw() {
    background(220, 200, 200)

    //desk
    rectMode(CORNER)
    noStroke()
    fill(200, 150, 100)
    rect(0, 600, 800, 200)

    //functions
    pc()
    lamp()
    room()

    // print(roomLight.hover)

    //the darkened version of the room (a blueish dark screen with a low alpha)
    //appears/disappears when the room lights are on/off
    rectMode(CORNER)
    fill(40, 50, 70, roomLight.a)
    rect(0, 0, 800, 700)

    //separate functions for the lights drawn above the dark screen so that the lights are more visible
    screenDisplay()
    lightDisplay()

}

//function that draws the pc
function pc() {

    //draws the monitor frame (?) and base
    fill(40)
    rectMode(CENTER)
    rect(width / 2, 560, 50, 80)
    rect(width / 2, 590, 100, 20)
    rect(width / 2, 400, 400, 300)

    //draws the powered off monitor screen
    rectMode(CENTER)
    noStroke()
    fill(50)
    rect(width / 2, 400, 350, 250)

    //draws the pc box
    fill(40)
    rectMode(CORNERS)
    rect(650, 600, 770, 300)

}

//displays the lit up pc screen
function screenDisplay() {

    //draws the blue pc screen with a changeable alpha
    //when the pc screen is off, its alpha becomes 0
    rectMode(CENTER)
    noStroke()
    fill(pcScreen.r, pcScreen.g, pcScreen.b, pcScreen.a)
    rect(width / 2, 400, 350, 250)

    // print(pcScreen.a)

}

//function that draws the lamp
function lamp() {

    //draws the base of the lamp
    fill(240, 230, 230)
    rectMode(CORNER)
    rect(20, 580, 100, 20)

    //draws the lamp pole or whatever its called
    stroke(240, 230, 230)
    strokeWeight(5)
    line(70, 580, 50, 400)
    line(50, 400, 100, 200)

    //draws the cone (?) part of the lamp (the part the light comes out of)
    circle(125, 205, 50)
    quad(100, 210, 140, 185, 170, 215, 120, 250)

}

//displays the lamp light
function lightDisplay() {

    //draws the beam of light coming from the lamp
    //when the lamp is off, its alpha becomes 0
    noStroke()
    fill(250, 250, 200, lampLight.a)
    quad(170, 215, 120, 250, 230, 600, 580, 600)

    //if the room is dark, the light will become brighter
    if (roomLight.on === true && lampLight.on === true) {
        lampLight.a = 150
    }

}

//detects when the mouse is clicked
function mouseClicked() {

    //if the mouse position is on the pc while it is clicked, the pc screen will toggle on or off
    if (mouseX > 650 && mouseX < 770 && mouseY < 600 && mouseY > 300) {
        if (pcScreen.on === true) {
            // pcScreen.r = 170
            // pcScreen.g = 220
            // pcScreen.b = 255
            pcScreen.a = 255
            pcScreen.on = false
            // print('woo')
        }
        else if (pcScreen.on === false) {
            // pcScreen.r = 50
            // pcScreen.g = 50
            // pcScreen.b = 50
            pcScreen.a = 0
            pcScreen.on = true
            // print('waa')
        }
    }


    //if the mouse position is on the lamp base when it is clicked, the lamp light will light up
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

    //if the mouse isnt above the pc or the lamp, the room's lights will be turned on and off instead
    if (roomLight.hover === false) {
        if (roomLight.on === true) {
            roomLight.a = 0
            roomLight.on = false
        }
        else if (roomLight.on === false) {
            roomLight.a = 100
            roomLight.on = true
        }
    }

}

//detects if the mouse is hovering above the pc or lamp
//if the mouse is hovering above either, the room lights cannot be controlled
//if it isnt, activate the bool that changes the room lights
function room() {
    if ((mouseX > 650 && mouseX < 770 && mouseY < 600 && mouseY > 300) || (mouseX > 20 && mouseX < 120 && mouseY > 580 && mouseY < 600)) {
        roomLight.hover = true
    } else {
        roomLight.hover = false
    }
}

