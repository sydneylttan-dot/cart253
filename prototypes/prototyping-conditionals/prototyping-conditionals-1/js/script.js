/**
 * Prototyping Conditionals 1
 * Sydney Tan

 */

"use strict";

let obst = {
    x: 900,
    y: 450,
    w: 50,
    h: 300,
    spd: -0.3,
    round: 0
}

let player = {
    x: 200,
    y: 450,
    w: 50,
    h: 50,
    gravity: 1,
    jump: 15,
    v: 0
}

let timer = 0;

let jumping = false;

let scoreDown = false;

let score = 0;

let colX;
let colY;

let gameOver = false;

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


    //drawing the obstacle 
    // triangle(obst.x, 500, obst.x + 25, obst.y, obst.x + 50, 500);
    rect(obst.x, obst.y, obst.w, obst.h);

    Player();

    keyPressed();

    //score text
    textSize(32);
    fill(40);
    text("Score: " + score, 30, 50);

    //making the collision hitbox the same as the obstacle hitbox
    colX = obst.x;
    colY = obst.y;


    //temp lines to see where colX / colY and player x / y are
    stroke(255, 0, 0);
    // line(colX, colY, 0, 0);
    // line(player.x, player.y + player.h, 0, 0);

    GameOver();

    // print(player.v)
}

function Obstacles() {
    obst.x = obst.x - 5 + obst.spd * obst.round;

    // 
    if (obst.x < -50) {
        obst.x = 900;
        obst.y = random(400, 450);
        obst.round++;

        if (gameOver === false) {
            score++;
        }

        // if (scoreDown === true) {
        //     score--;
        //     scoreDown = false;
        // } else {
        //     score++;
        // }
    }

    if (player.y + player.h > colY && player.x < colX && player.x + player.w > colX) {

        //temp circle to see if collision worked
        // circle(100, 200, 299)

        // scoreDown = true;
        gameOver = true;
    }
}

function Player() {
    rect(player.x, player.y, player.w, player.h);

    //Player stays on the ground
    if (player.y + player.h > 450) {
        player.y = 450 - player.h;
    }

    // if (keyIsDown(UP_ARROW) === true) {
    //     player.y = player.y - 5 * player.gravity;
    //     jumping = true;
    // } else {
    //     player.y += 4 * player.gravity;
    // }

    // if (timer > 20 && jumping === true) {
    //     player.y += 4 * player.gravity;
    // }

    // if (player.y == 450) {
    //     timer = 0;
    //     jumping = false;
    // }
}

//functio
function keyPressed() {
    //     if (keyCode === 32) {
    //         player.y = player.y - 5;
    //         print("weh")
    //     } else {
    //         player.y += 5;
    //     }

    player.y += player.v;

    if (keyIsPressed && key === ' ' && player.y === 450) {
        // player.y = player.y - 100;
        player.v = -player.jump;
    }

    if (player.y < 450) {
        player.v += player.gravity;
    }

    // else {
    //     // player.y += 4 * player.gravity;
    // }

    //Ceiling limit during testing
    // if (player.y < 0) {
    //     player.y = 0;
    // }
}


//function that displays the game over screen
function GameOver() {

    if (gameOver === true) {
        noStroke();
        fill(40);
        rect(0, 0, 800, 600);
        textSize(64);
        textAlign(CENTER, CENTER);
        fill(255);
        text("GAME OVER", width / 2, height / 2);
        textSize(32);
        text("Score: " + score, width / 2, height / 2 + 100);
    }

} 