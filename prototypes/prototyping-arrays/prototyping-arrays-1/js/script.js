/**
 * Title of Project
 * Sydney Tan
 * 
 * Goldfish feeding simulator
 */

"use strict";

/**
*/
function setup() {
    createCanvas(800, 800);
}


/**
*/
function draw() {
    background(220, 210, 200);
    drawFurniture();
}

function drawFurniture() {

    strokeWeight(20);
    stroke(190, 150, 130);
    fill(170, 200, 225)
    rect(500, 200, 200, 200)
    line(600, 200, 600, 400);
    line(500, 300, 700, 300);

    noStroke();
    fill(190, 150, 130);
    rect(0, 600, 800, 200);

    fill(255, 255, 255, 155);
    rect(150, 300, 500, 300);

    fill(170, 210, 255, 180);
    rect(170, 320, 460, 260);


}