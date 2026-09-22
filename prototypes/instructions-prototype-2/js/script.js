/**
 * Instructions Prototype 2
 * Sydney Tan
 */

"use strict";

let circleSize
let bgSize

function setup() {
    createCanvas(800, 800);
    describe('A project that changes its appearanceaccording to the mouse position. The purpose of this prototype was to refamiliarize myself with mouseX and mouseY as well as random and variables. The project works best when the mouse moves quickly.')

    //size variables
    circleSize = 100;
    bgSize = 1000;
}


function draw() {
    background(20, 100, 100);

    //size variable changes
    describe('The size variables for the black circle in the bg and the jittering white circle in the middle of the canvas.')
    circleSize = circleSize + random(-10, 10);
    bgSize = bgSize + random(-10, 10);

    //black circle in the bg
    describe('A big black circle in the bg that changes size at a random pace (from -10 to 10). Covers part of the actual teal bg')
    fill(0)
    noStroke();
    circle(width / 2, height / 2, bgSize);

    //white ellipse
    describe('White ellipse whos height depends on the mousesX and whos width depends on the mousesY')
    push();
    fill(255);
    noStroke();
    ellipse(width / 2, height / 2, mouseY, mouseX);
    pop();

    //cyan ellipse
    describe('Cyan ellipse whos height depends on the mousesY and whos width depends on the mousesX')
    push();
    fill(100, 190, 220, 180);
    noStroke();
    ellipse(width / 2, height / 2, mouseX - 20, mouseY - 20);
    pop();

    //magenta square
    describe('Magenta square with rounded corners whos size depends on the mousesX')
    push();
    fill(170, 40, 190, 180);
    noStroke();
    rectMode(CENTER);
    square(width / 2, height / 2, mouseX - 100, 60);
    pop();

    //green circle
    describe('Green circle whos size depends on the mousesY')
    push();
    fill(80, 200, 150, 150);
    noStroke();
    circle(width / 2, height / 2, mouseY - 600);
    pop();

    //multicoloured square
    describe('Centered square with rounded corners whos colour and size depend on the mousesX and Y respectively')
    push();
    fill(40, 225, mouseX, 140);
    noStroke();
    rectMode(CENTER);
    square(width / 2, height / 2, mouseY - 100, 70);
    pop();

    //white circle
    describe('Jittering white circle in the middle of the canvas whos size varies according to circleSize (random from -10 to 10)')
    push();
    fill(255, 255, 255, 50);
    noStroke();
    circle(width / 2, height / 2, circleSize);
    pop();

    //small white circles in the bg
    describe('Small white circles in the bg that appear at random locations every time the loop resets')
    fill(255, 255, 255, 50);
    noStroke();
    circle(random(0, width), random(0, height), random(1, 5));
    circle(random(0, width), random(0, height), random(1, 5));

}