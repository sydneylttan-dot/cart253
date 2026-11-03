/**
 * Prototyping Arrays 2: Reworked Food Chain
 * Sydney Tan
 * 
 * Remake of a Prototyping Functions (Food Chain) but with arrays. Adds more orbs
 * Reworked part of the other code so that it can function with arrays
 * 
 * A small prototype where the player grows when eating orbs
 * 
 * Controls:
 * - Arrow keys: player (the white circle) movement
 * 
 * Project Idea: 
 *  - Colony of orbs that interact with each other in different ways (kinda like agar.io?)
 * wanted to make a project where u feed a fish instead of this, i'll make that next week with arrays
 * on second thought, this one would also benefit greatly from arrays
 */

"use strict";


//VARIABLES

//timer for the up/down movement of the orbs
let timer = 0

let choice = undefined;

//player's variables: sets the initial x/y and size (both of these are changed later in the playerMove and checkOverlap functions)
let player = {
    x: 500,
    y: 500,
    size: 50
}

//walls that constrain the player's x and y to the canvas
let walls = {
    right: 1000,
    left: 0,
    top: 0,
    bottom: 1000
}

//orb presets
const orbTypes = [

    //mini orbs
    {
        x: undefined,
        y: undefined,
        size: 10,
        r: 255,
        g: 150,
        b: 200,
    },

    //small orbs
    {
        x: undefined,
        y: undefined,
        size: 30,
        r: 100,
        g: 255,
        b: 100,
    },

    //medium orbs
    {
        x: undefined,
        y: undefined,
        size: 50,
        r: 100,
        g: 255,
        b: 255,
    },

    //big orbs
    {
        x: undefined,
        y: undefined,
        size: 70,
        r: 255,
        g: 100,
        b: 255,
    },

    //huge orbs
    {
        x: undefined,
        y: undefined,
        size: 100,
        r: 255,
        g: 100,
        b: 100,
    }
]

//for the orb drawing array
const orbs = []

/**
 * creates the canvas
 * sets how many orbs can be created
 * randomizes which orb types are created
 * variables for orb
*/
function setup() {
    createCanvas(1000, 1000)

    let orbAmount = floor(random(10, 16));

    for (let i = 0; i < orbAmount; i++) {
        let choice = random(orbTypes);

        let orb = {
            x: random(200, 800),
            y: random(200, 800),
            size: choice.size,
            r: choice.r,
            g: choice.g,
            b: choice.b
        };

        orbs.push(orb);
    }

}

/**
 * draws the bg, calls the functions
 * increases the timer for orbMove
*/
function draw() {
    background(40)

    noStroke()

    //increase the timer's count
    timer++

    // //calls the function that lets the player move
    playerMove()

    //draws the orbs and calls the move and overlap functions for each orb created
    for (let orb of orbs) {
        drawOrb(orb)
        orbMove(orb)
        checkOverlap(player, orb)
    }
}

//draws the orb
function drawOrb(type) {
    fill(type.r, type.g, type.b)
    circle(type.x, type.y, type.size)
}

//constrains the player's x/y to the canvas, draws the player, manages the player movements
//player moves when the arrow keys are pressed
//the player circle's x and y are the constrained x and y
function playerMove() {

    //constrains the player to the interior of the walls
    let xc = constrain(player.x, walls.left, walls.right)
    let yc = constrain(player.y, walls.top, walls.bottom)

    //move the player according to the key pressed
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

    //draws the player with its constrained x/y values
    fill(255)
    circle(xc, yc, player.size)
}

//sets the random starting locations of all of the orbs. all of them are different thanks to parameters in draw
function orbSetup(type) {
    type.x = random(200, 800)
    type.y = random(200, 800)
}

//function that makes the orbs go up and down. like in the orbDraw function, type is replaced by the variables set before setup in the draw loop so that this function can control all of their movements
function orbMove(type) {

    for (let orb of orbs) {
        if (timer > 10) {
            type.y -= 0.03
        } else if (timer < 10) {
            type.y += 0.03
        }

        //when the timer goes above 20, reset it to 0 so that the movement loop above can be restarted
        if (timer > 20) {
            timer = 0
        }
    }

}

//checks if the user (the player) and the target (the orbs) are overlapping
//the player's size grows according to the size of the orb
//if and else if statements check if the target is of a specific size. the player's size grows according to the size of the orb it came in contact with
//i didnt know how to make the orbs disappear when the player came in contact with it (my usual prefered trick of setting the alpha to 0 doesnt work in this scenario because the orb would still be there even if its alpha was 0)
//so I just moved the orbs off of the canvas when it came in contact with the player since the player can't leave the canvas
//it may not be the best but it works :)
function checkOverlap(user, target) {

    const d = dist(user.x, user.y, target.x, target.y)
    const overlap = (d < user.size / 2 + target.size / 2)
    if (overlap) {
        target.x = 2000
        target.y = 2000

        if (target.size === 10) {
            user.size += 5
        } else if (target.size === 30) {
            user.size += 10
        } else if (target.size === 50) {
            user.size += 20
        } else if (target.size === 70) {
            user.size += 40
        } else if (target.size === 100) {
            user.size += 50
        }
    }
}