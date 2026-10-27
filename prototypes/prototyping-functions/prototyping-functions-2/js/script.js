/**
 * Prototyping Functions 2:
 * Sydney Tan
 * 
 * Project Idea: 
 * Colony of orbs that interact with each other in different ways (kinda like agar.io?)
 * 
 */

"use strict";

let sizeMini = {
    x: undefined,
    y: undefined,
    size: 10,
    r: 100,
    g: 255,
    b: 200
}

let sizeSmall = {
    x: undefined,
    y: undefined,
    size: 30,
    r: 100,
    g: 255,
    b: 100
}

/**
*/
function setup() {
    createCanvas(1000, 1000)

    orbSetup(sizeSmall)
    orbSetup(sizeMini)
}


/**
*/
function draw() {
    background(40)

    orbDraw(sizeSmall)
    orbDraw(sizeMini)
}

function orbSetup(type) {
    type.x = random(200, 800)
    type.y = random(200, 800)
}

function orbDraw(type) {

    fill(type.r, type.g, type.b)
    circle(type.x, type.y, type.size)
}