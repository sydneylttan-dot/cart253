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

let guest1Image;
let guest2Image;
let guest3Image;

let enter = {
    room1: false,
    room2: false,
    room3: false,
    lobby: true
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {

    guest1Image = await loadImage(('./assets/images/hotelguest1.png'))
    guest2Image = await loadImage(('./assets/images/hotelguest2.png'))
    guest3Image = await loadImage(('./assets/images/hotelguest3.png'))

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

    // print(enter.lobby)

}

function drawLobby() {

    fill(70, 50, 50)
    rect(150, 100, 500, 100, 10)

    fill('white')
    textSize(40)
    textAlign(CENTER, CENTER)
    text('WELCOME TO THE', 400, 130)
    text('CROW HOTEL', 400, 170)

    fill('maroon')
    rect(0, 500, 800, 200)

    fill(80, 70, 50)
    noStroke()

    rect(100, 300, 100, 200)

    rect(350, 300, 100, 200)

    rect(600, 300, 100, 200)

    fill('yellow')
    circle(180, 430, 20)

    circle(430, 430, 20)

    circle(680, 430, 20)

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
    fill(190, 130, 120)
    rect(0, 0, 800, 700)
    enter.lobby = false

    imageMode(CENTER)
    image(guest1Image, width / 2, height / 2, 700, 700)

    returnToLobby()
}

function drawRoom2() {
    fill(255)
    rect(0, 0, 800, 700)
    enter.lobby = false

    imageMode(CENTER)
    image(guest2Image, width / 2, height / 2, 700, 700)


    returnToLobby()

}

function drawRoom3() {
    fill(190, 130, 120)
    rect(0, 0, 800, 700)
    enter.lobby = false

    imageMode(CENTER)
    image(guest3Image, width / 2, height / 2, 700, 700)

    returnToLobby()
}