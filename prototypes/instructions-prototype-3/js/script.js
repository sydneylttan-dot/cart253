/**
 * Instructions Prototype 3
 * Sydney Tan

 */

"use strict";

let circleX
let circleY

function setup() {
    createCanvas(800, 800);

    circleX = random(100, 700)
    circleY = random(100, 700)

}



function draw() {
    background(40);

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

    push();
    shearX(mouseX / mouseY);
    shearY(mouseY / mouseX);
    // shearY(mouseY);
    noFill();
    stroke(255);
    strokeWeight(5);
    circle(circleX, circleY, 100)
    stroke(255);
    strokeWeight(50);
    line(0, 500, 1000, 50);
    pop();


}

function mouseClicked() {
    circleX = random(100, 700)
    circleY = random(100, 700)
}