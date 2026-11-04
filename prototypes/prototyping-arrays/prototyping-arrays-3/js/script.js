/**
 * Prototyping Arrays 3
 * Sydney Tan
 * 
 * project idea:
 * array of crows
 * random crows on branches or something
 * 
 */

"use strict";

let choice = undefined;

let randomizer = undefined;

let crow1 = {
    x: 271,
    y: 445 - 25,
    size: 50
}

let crow2 = {
    x: 680,
    y: 296 - 25,
    size: 50
}

let crow3 = {
    x: 503,
    y: 595 - 25,
    size: 50
}

const birdColours = [
    //red
    {
        fill: {
            r: 255,
            g: 20,
            b: 40,
        }
    },

    //green
    {
        fill: {
            r: 30,
            g: 255,
            b: 180,
        }
    },

    //yellow
    {
        fill: {
            r: 180,
            g: 180,
            b: 40,
        }
    },

    //purple
    {
        fill: {
            r: 180,
            g: 40,
            b: 190,
        }
    },

    //orange
    {
        fill: {
            r: 180,
            g: 140,
            b: 140,
        }
    }
]

const crowsEyes = []

/**
*/
function setup() {
    createCanvas(800, 800)

    randomizer = random(birdColours)


}


/**
*/
function draw() {
    background(200, 220, 255)

    drawBG()
    drawCrows()

    print(randomizer)
}

function drawBG() {
    // fill(200, 160, 130)

    stroke(200, 150, 100)
    strokeWeight(5)

    line(0, 500, 200, 450)
    line(200, 450, 340, 440)
    line(100, 475, 250, 500)

    line(800, 650, 700, 680)
    line(700, 680, 480, 670)
    line(755, 663, 600, 600)
    line(600, 600, 370, 590)

    line(800, 300, 470, 290)
    line(662, 296, 390, 250)
    line(757, 299, 700, 320)
    line(700, 320, 639, 330)
}

function drawCrows() {

    noStroke()

    //crow 1
    fill(40)
    circle(crow1.x, crow1.y, crow1.size)

    fill(255)
    circle(crow1.x - 15, crow1.y - 2, 5)
    circle(crow1.x + 15, crow1.y - 2, 5)



    //crow 2
    fill(40)
    circle(crow2.x, crow2.y, crow2.size)

    fill(255)
    circle(crow2.x - 15, crow2.y - 2, 5)
    circle(crow2.x + 15, crow2.y - 2, 5)

    //crow 3
    fill(40)
    circle(crow3.x, crow3.y, crow3.size)

    fill(255)
    circle(crow3.x - 15, crow3.y - 2, 5)
    circle(crow3.x + 15, crow3.y - 2, 5)

}

//for figuring out the x and y positions of the branches
function mouseClicked() {
    print(mouseX, mouseY)
}

function randomEyeColour(array) {
    const randomIndex = floor
}