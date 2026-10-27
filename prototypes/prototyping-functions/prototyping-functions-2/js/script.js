/**
 * Prototyping Functions 2:
 * Sydney Tan
 * 
 * Project Idea: 
 *  - Colony of orbs that interact with each other in different ways (kinda like agar.io?)
 * wanted to make a project where u feed a fish instead of this, i'll make that next week with arrays
 */

"use strict";

let timer = 0

let sizeMini = {
    x: undefined,
    y: undefined,
    size: 10,
    r: 255,
    g: 150,
    b: 200,
}

let sizeSmall = {
    x: undefined,
    y: undefined,
    size: 30,
    r: 100,
    g: 255,
    b: 100,
}

let sizeMedium = {
    x: undefined,
    y: undefined,
    size: 50,
    r: 100,
    g: 255,
    b: 255,
}

let player = {
    x: 500,
    y: 500,
    size: 50
}

/**
*/
function setup() {
    createCanvas(1000, 1000)

    orbSetup(sizeMini)
    orbSetup(sizeSmall)
    orbSetup(sizeMedium)

}

/**
*/
function draw() {
    background(40)

    noStroke()

    timer++

    print(timer)

    orbDraw(sizeMini)
    orbMove(sizeMini)

    orbDraw(sizeSmall)
    orbMove(sizeSmall)

    orbDraw(sizeMedium)
    orbMove(sizeMedium)

    // orbDraw(sizeMini)
    // orbMove(sizeMini)

    playerDraw()
    playerMove()
}

function orbDraw(type) {

    fill(type.r, type.g, type.b)
    circle(type.x, type.y, type.size)
}

function orbMove(type) {

    if (timer > 10) {
        type.y--
    } else if (timer < 10) {
        type.y++
    }

    if (timer > 19) {
        timer = 0
    }

}

function orbSetup(type) {
    type.x = random(200, 800)
    type.y = random(200, 800)
}

function playerDraw() {
    fill(255)
    circle(player.x, player.y, player.size)
}

function playerMove() {
    if (keyIsDown(LEFT_ARROW)) {
        player.x -= 5
    }

    if (keyIsDown(RIGHT_ARROW)) {
        player.x += 5
    }

    if (keyIsDown(UP_ARROW)) {
        player.y -= 5
    }

    if (keyIsDown(DOWN_ARROW)) {
        player.y += 5
    }
}

function collisionDetect() {

}