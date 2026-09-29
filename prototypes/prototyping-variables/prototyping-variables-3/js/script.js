/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let stroke50 = 1
let stroke100 = 1
let stroke150 = 1
let stroke200 = 1
let stroke250 = 1
let stroke300 = 1
let stroke350 = 1
let stroke400 = 1
let stroke450 = 1
let stroke500 = 1
let stroke550 = 1
let stroke600 = 1
let stroke650 = 1
let stroke700 = 1
let stroke750 = 1
let stroke800 = 1
let stroke850 = 1
let stroke900 = 1
let stroke950 = 1

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 500)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(40);

    stroke(255);

    strokeWeight(stroke50);
    line(50, 0, 50, 500);

    strokeWeight(stroke100);
    line(100, 0, 100, 500);

    strokeWeight(stroke150);
    line(150, 0, 150, 500);

    strokeWeight(stroke200);
    line(200, 0, 200, 500);

    strokeWeight(stroke250);
    line(250, 0, 250, 500);

    strokeWeight(stroke300);
    line(300, 0, 300, 500);

    strokeWeight(stroke350);
    line(350, 0, 350, 500);

    strokeWeight(stroke400);
    line(400, 0, 400, 500);

    strokeWeight(stroke450);
    line(450, 0, 450, 500);

    strokeWeight(stroke500);
    line(500, 0, 500, 500);

    strokeWeight(stroke550);
    line(550, 0, 550, 500);

    strokeWeight(stroke600);
    line(600, 0, 600, 500);

    strokeWeight(stroke650);
    line(650, 0, 650, 500);

    strokeWeight(stroke700);
    line(700, 0, 700, 500);

    strokeWeight(stroke750);
    line(750, 0, 750, 500);

    strokeWeight(stroke800);
    line(800, 0, 800, 500);

    strokeWeight(stroke850);
    line(850, 0, 850, 500);

    strokeWeight(stroke900);
    line(900, 0, 900, 500);

    strokeWeight(stroke950);
    line(950, 0, 950, 500);

    if (mouseX >= 45 && mouseX <= 55) {
        stroke50 = 5
    } else {
        stroke50 = 1
    }

    if (mouseX >= 95 && mouseX <= 105) {
        stroke100 = 5
    } else {
        stroke100 = 1
    }

    if (mouseX >= 145 && mouseX <= 155) {
        stroke150 = 5
    } else {
        stroke150 = 1
    }

    if (mouseX >= 195 && mouseX <= 205) {
        stroke200 = 5
    } else {
        stroke200 = 1
    }

    if (mouseX >= 245 && mouseX <= 255) {
        stroke250 = 5
    } else {
        stroke250 = 1
    }
}