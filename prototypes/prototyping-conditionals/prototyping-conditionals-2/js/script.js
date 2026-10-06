/**
 * Prototyping Conditionals 2 :
 * Sydney Tan
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let circle1Exists = false;
let circle2Exists = false;
let circle3Exists = false;
let circle4Exists = false;
let circle5Exists = false;
let circle6Exists = false;

let circle1 = {
    x: undefined,
    y: undefined,
    size: 1,

    r: 255,
    g: 255,
    b: 255
}

let circle2 = {
    x: undefined,
    y: undefined,
    size: 1,

    r: 255,
    g: 255,
    b: 255
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 900);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(40);


    noFill();
    stroke(255);

    Circle();

    print(circle1Exists)
    print(circle2Exists)

}

function Circle() {
    stroke(circle1.r, circle1.g, circle1.b);
    // circle(mouseX, mouseY, circle1.size);

    // if (mouseIsPressed) {
    //     circle(circle1.x, circle1.y, circle1.size);
    // }

    if (circle1Exists === true) {
        circle1.size += 1;
        circle(circle1.x, circle1.y, circle1.size);
    }

    if (circle2Exists === true) {
        circle2.size += 1;
        circle(circle2.x, circle2.y, circle2.size);
    }
}

function mousePressed() {

    if (circle1Exists === false) {
        circle1.x = mouseX;
        circle1.y = mouseY;
        circle1Exists = true;
    }

    if (circle1Exists === true && circle2Exists === false) {
        circle2.x = mouseX;
        circle2.y = mouseY;
        circle2Exists = true;
    } else {
        circle2Exists = false
    }

}