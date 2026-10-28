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

}

function drawLobby() {

    fill('black')
    rect(150, 100, 500, 100)

    fill('maroon')
    rect(0, 500, 800, 200)

    fill(80, 70, 50)
    noStroke()
    rectMode(CORNER)
    rect(100, 300, 100, 200)

    rect(350, 300, 100, 200)

    rect(600, 300, 100, 200)
}

function mouseClicked() {
    if (mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 500 || mouseX > 350 && mouseX < 450 && mouseY > 300 && mouseY < 500 || mouseX > 600 && mouseX < 700 && mouseY > 300 && mouseY < 500) {
        print('woo')
    }
}

function drawRoom1() {

}

function drawRoom2() {


}

function drawRoom3() {

}