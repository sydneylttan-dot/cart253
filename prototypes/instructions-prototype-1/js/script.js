/**
 * Instructions Prototype 1
 * Sydney Tan
 * 


"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 800);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(120, 220, 100);

    //BODY
    push();
    fill(80, 170, 40);
    noStroke();
    ellipse(width / 2, height / 2 + 170, 500, 300);
    pop();
    push();
    fill(225, 225, 170);
    noStroke();
    ellipse(width / 2, height / 2 + 170, 350, 270);
    pop();

    //HEAD
    push();
    fill(80, 170, 40);
    noStroke();
    ellipse(width / 2, height / 2, 400, 270);
    pop();

    //EYES
    push();
    fill(80, 170, 40);
    noStroke();
    circle(250, 300, 150);
    circle(550, 300, 150);
    pop();
    push();
    fill(225, 200, 40);
    noStroke();
    ellipse(230, 300, 100, 120);
    ellipse(570, 300, 100, 120);
    pop();
    push();
    fill(50, 50, 50);
    noStroke();
    ellipse(215, 300, 70, 50);
    ellipse(585, 300, 70, 50);
    pop();

    //MOUTH
    push();
    strokeWeight(5);
    stroke(170, 100, 20);
    line(210, 430, 400, 440);
    line(400, 440, 590, 430);
    pop();

    //NOSTRILS
    push();
    fill(170, 100, 20);
    noStroke();
    ellipse(350, 390, 20, 10);
    ellipse(450, 390, 20, 10);
    pop();

}