/**
 * Prototyping Functions 2: Food Chain
 * Sydney Tan
 * 
 * Project Idea: 
 *  - Colony of orbs that interact with each other in different ways (kinda like agar.io?)
 * wanted to make a project where u feed a fish instead of this, i'll make that next week with arrays
 * on second thought, this one would also benefit greatly from arrays
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

let sizeBig = {
    x: undefined,
    y: undefined,
    size: 70,
    r: 255,
    g: 100,
    b: 255,
}

let sizeHuge = {
    x: undefined,
    y: undefined,
    size: 100,
    r: 255,
    g: 100,
    b: 100,
}

let player = {
    x: 500,
    y: 500,
    size: 50
}

let walls = {
    right: 1000,
    left: 0,
    top: 0,
    bottom: 1000
}

/**
*/
function setup() {
    createCanvas(1000, 1000)

    orbSetup(sizeMini)
    orbSetup(sizeSmall)
    orbSetup(sizeMedium)
    orbSetup(sizeBig)
    orbSetup(sizeHuge)

}

/**
*/
function draw() {
    background(40)

    noStroke()

    // print(player.size)

    timer++

    orbDraw(sizeMini)
    orbMove(sizeMini)

    orbDraw(sizeSmall)
    orbMove(sizeSmall)

    orbDraw(sizeMedium)
    orbMove(sizeMedium)

    orbDraw(sizeBig)
    orbMove(sizeBig)

    orbDraw(sizeHuge)
    orbMove(sizeHuge)

    playerDraw()
    playerMove()

    checkOverlap(player, sizeMini)
    checkOverlap(player, sizeSmall)
    checkOverlap(player, sizeMedium)
    checkOverlap(player, sizeBig)
    checkOverlap(player, sizeHuge)
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

    if (timer > 20) {
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

    let xc = constrain(player.x, walls.left, walls.right)
    let yc = constrain(player.y, walls.top, walls.bottom)

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
    circle(xc, yc, player.size)
}

function checkOverlap(user, target) {
    const d = dist(user.x, user.y, target.x, target.y)
    const overlap = (d < user.size / 2 + target.size / 2)
    if (overlap) {
        target.x = 2000
        target.y = 2000

        if (target.size === 10) {
            user.size += 10
        } else if (target.size === 30) {
            user.size += 30
        } else if (target.size === 50) {
            user.size += 50
        } else if (target.size === 70) {
            user.size += 70
        } else if (target.size === 100) {
            user.size += 100
        }
    }
}