/**
 * Prototyping Conditionals 1
 * Sydney Tan

 */

"use strict";

let obst = {
    x: 900,
    y: 450,
    w: 50,
    h: 300
}

let player = {
    x: 200,
    y: 450,
    w: 50,
    h: 50,
    gravity: 0.4
}

let timer = 0;

let jumping = false;

/**
*/
function setup() {
    createCanvas(800, 600);
}


/**
 * 
*/
function draw() {
    background(200);


    noStroke();
    fill(40)
    rect(0, 500, 800, 100);
    Obstacles();

    triangle(obst.x, 500, obst.x + 25, obst.y, obst.x + 50, 500);

    Player();

    keyPressed();
}

function Obstacles() {
    obst.x = obst.x - 5;

    if (obst.x < 0) {
        obst.x = 900;
        obst.y = random(400, 450);
    }
}

function Player() {
    rect(player.x, player.y, player.w, player.h);

    if (keyIsDown(UP_ARROW) === true) {
        player.y = player.y - 5 * player.gravity;
        jumping = true;
    } else {
        player.y += 4 * player.gravity;
    }

    if (timer > 20 && jumping === true) {
        player.y += 4 * player.gravity;
    }

    if (player.y == 450) {
        timer = 0;
        jumping = false;
    }
}

function keyPressed() {
    //     if (keyCode === 32) {
    //         player.y = player.y - 5;
    //         print("weh")
    //     } else {
    //         player.y += 5;
    //     }

    if (player.y > 450) {
        player.y = 450;
    }

    if (player.y < 0) {
        player.y = 0;
    }
}