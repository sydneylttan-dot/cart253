/**
 * Prototyping Functions 3: Welcome to the Crow Hotel
 * Sydney Tan
 * 
 * Project Idea:
 * Hotel rooms, clicking them opens the room and different crows await inside
 * Functions for how the doors work (hotel num = 1/2/3/4, stuff like that)
 * draw crows (monocle + top hat)
 * inspo p3r velvet room animation
 */

"use strict";


//VARIABLES

let enter = {
    room1: false,
    room2: false,
    room3: false,
    lobby: true
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 700)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('brown')

    drawLobby()

    if (enter.room1 === true) {
        drawRoom1()
    }

    if (enter.room2 === true) {
        drawRoom2()

    }

    if (enter.room3 === true) {
        drawRoom3()
    }

    if (enter.room1 === false && enter.room2 === false && enter.room3 === false) {
        drawLobby()
    }

    // drawRoom1()

    if (enter.lobby === true) {
        enter.room1 = false
        enter.room2 = false
        enter.room3 = false
    }

    print(enter.lobby)

}

function drawLobby() {

    fill('black')
    rect(150, 100, 500, 100)

    fill('maroon')
    rect(0, 500, 800, 200)

    fill(80, 70, 50)
    noStroke()

    rect(100, 300, 100, 200)

    rect(350, 300, 100, 200)

    rect(600, 300, 100, 200)

}

function mouseClicked() {

    if (enter.lobby === true) {
        if (mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 500) {
            enter.room1 = true
        }

        if (mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 500) {
            enter.room2 = true
        }

        if (mouseX > 600 && mouseX < 700 && mouseY > 300 && mouseY < 500) {
            enter.room3 = true
        }
    }

    if (mouseX > 630 && mouseX < 750 && mouseY > 600 && mouseY < 650) {
        enter.lobby = true
        enter.room1 = false
        enter.room2 = false
        enter.room3 = false
    }
}

function returnToLobby() {
    fill(70, 50, 50)
    rect(630, 600, 120, 50, 10)

    fill(255)
    textAlign(CENTER, CENTER)
    textSize(25)
    text('LOBBY', 690, 625)
}

function drawRoom1() {
    fill('brown')
    rect(0, 0, 800, 700)
    enter.lobby = false


    returnToLobby()
}

function drawRoom2() {
    fill(0, 255, 0)
    rect(0, 0, 800, 700)
    enter.lobby = false


    returnToLobby()

}

function drawRoom3() {
    fill(0, 0, 255)
    rect(0, 0, 800, 700)
    enter.lobby = false


    returnToLobby()
}