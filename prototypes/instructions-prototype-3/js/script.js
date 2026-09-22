/**
 * Instructions Prototype 3
 * Sydney Tan

 */

"use strict";

let circleX
let circleY

function setup() {
    createCanvas(800, 800);

    //the circle's x and y values are randomized once the canvas is created
    circleX = random(100, 700)
    circleY = random(100, 700)

    describe('A series of dark gray and white alternating lines that break off at an angle made with shear. There is a circle whos position is randomized when the mouse is clicked')

}



function draw() {
    background(40);

    //shear test
    noStroke();
    // push();
    // shearX(100);
    // circle(width / 2, height / 2, 50);
    // square(300, 300, 60);
    // ellipse(600, 700, 200, 100);
    // pop();
    // push();
    // // shearX(20);
    // shearY(60);
    // stroke(255);
    // strokeWeight(50);
    // // line(0, 500, 900, 50);
    // rectMode(CORNERS);
    // rect(200, 500, 0, 0);
    // rect(600, 600, 50, 500);
    // pop();

    //white lines on the right
    describe('A series of white rectangles that are cut at an angle')
    push();
    shearX(10);
    rect(300, -4, 700, 50);
    rect(300, 96, 700, 60);
    rect(300, 205, 700, 51);
    rect(300, 305, 700, 51);
    rect(300, 405, 700, 51);
    rect(300, 505, 700, 51);
    rect(300, 605, 700, 51);
    rect(300, 705, 700, 51);

    //white lines on the left
    describe('Another series of white rectangles that are cut at the same angle as the previous, but who are also slanted up')
    push();
    shearY(-10);
    rect(-200, 50, 500, 50);
    rect(-300, 150, 600, 50);
    rect(-400, 240, 700, 50);
    rect(-500, 350, 800, 50);
    rect(-600, 450, 900, 50);
    rect(-700, 550, 1000, 50);
    rect(-800, 650, 1100, 50);
    rect(-900, 750, 1200, 50);
    rect(-1000, 850, 1300, 50);
    rect(-1100, 950, 1400, 50);
    pop();

    pop();

    //white lines on the bottom left
    describe('A 3rd set of white rectangles that are cut at one of the angles of the 2nd set of lines')
    push();
    shearY(-10);
    rect(0, 650, 50, 700)
    rect(100, 580, 50, 700)
    rect(200, 570, 50, 700)
    rect(300, 520, 50, 700)
    rect(400, 485, 50, 700)
    pop();

    //rectangle to hide the bit of white rectangle that sticks out of the lines
    push();
    fill(40)
    rect(433, 175, 500, 30);
    pop();


    //circle and line
    describe('A white circle whos x and y values are randomized at the start of the code. When the mouse is clicked, the circles x and y values are randomized again.')
    push();
    // shearX(mouseX / mouseY);
    // shearY(mouseY / mouseX);
    // shearY(mouseY);
    noFill();
    stroke(255);
    strokeWeight(5);
    circle(circleX, circleY, 100)
    stroke(255);
    strokeWeight(50);
    // line(0, 500, 1000, 50);
    pop();


}

describe('The function that randomizes the circles x and y values when the mouse is clicked. This part of the code is put in a separate function to prevent the circle from moving every frame')
function mouseClicked() {
    circleX = random(100, 700)
    circleY = random(100, 700)
}