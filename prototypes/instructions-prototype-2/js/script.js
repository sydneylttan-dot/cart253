/**
 * Instructions Prototype 2
 * Sydney Tan
 */

"use strict";

let circleSize
let bgSize

function setup() {
    createCanvas(800, 800);

    circleSize = 100;
    bgSize = 1000;
}


function draw() {
    background(20, 100, 100);

    //size variable changes
    circleSize = circleSize + random(-10, 10);
    bgSize = bgSize + random(-10, 10);

    //black circle in the bg
    fill(0)
    noStroke();
    circle(width / 2, height / 2, bgSize);

    //white ellipse
    push();
    fill(255);
    noStroke();
    ellipse(width / 2, height / 2, mouseY, mouseX);
    pop();

    //cyan ellipse
    push();
    fill(100, 190, 220, 180);
    noStroke();
    ellipse(width / 2, height / 2, mouseX - 20, mouseY - 20);
    pop();

    //magenta square
    push();
    fill(170, 40, 190, 180);
    noStroke();
    rectMode(CENTER);
    square(width / 2, height / 2, mouseX - 100, 60);
    pop();

    //green circle
    push();
    fill(80, 200, 150, 150);
    noStroke();
    circle(width / 2, height / 2, mouseX - 600);
    pop();

    //green square
    push();
    fill(40, 225, 100, 140);
    noStroke();
    rectMode(CENTER);
    square(width / 2, height / 2, mouseY - 100, 70);
    pop();

    push();
    fill(255, 255, 255, 50);
    noStroke();
    circle(width / 2, height / 2, circleSize);
    pop();

    fill(255, 255, 255, 50);
    noStroke();
    circle(random(0, width), random(0, height), random(1, 5));
    circle(random(0, width), random(0, height), random(1, 5));

}