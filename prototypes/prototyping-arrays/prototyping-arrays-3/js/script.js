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

/**
*/
function setup() {
    createCanvas(800, 800)
}


/**
*/
function draw() {
    background(200, 220, 255)

    drawBG()
}

function drawBG() {
    fill(200, 160, 130)


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

//for figuring out the x and y positions of the branches
// function mouseClicked() {
//     print(mouseX, mouseY)
// }