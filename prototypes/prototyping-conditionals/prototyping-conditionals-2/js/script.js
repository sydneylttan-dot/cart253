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

let circle3 = {
    x: undefined,
    y: undefined,
    size: 1,

    r: 255,
    g: 255,
    b: 255
}

let circle4 = {
    x: undefined,
    y: undefined,
    size: 1,

    r: 255,
    g: 255,
    b: 255
}

let circle5 = {
    x: undefined,
    y: undefined,
    size: 1,

    r: 255,
    g: 255,
    b: 255
}

let circle6 = {
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

    if (circle3Exists === true) {
        circle3.size += 1;
        circle(circle3.x, circle3.y, circle3.size);
    }

    if (circle4Exists === true) {
        circle4.size += 1;
        circle(circle4.x, circle4.y, circle4.size);
    }

    if (circle5Exists === true) {
        circle5.size += 1;
        circle(circle5.x, circle5.y, circle5.size);
    }

    if (circle6Exists === true) {
        circle6.size += 1;
        circle(circle6.x, circle6.y, circle6.size);
    }
}

function mouseClicked() {

    if (circle1Exists === false) {
        circle1.x = mouseX;
        circle1.y = mouseY;
        circle1Exists = true;
    }

    else if (circle1Exists === true && circle2Exists === false) {
        circle2.x = mouseX;
        circle2.y = mouseY;
        circle2Exists = true;
    }

    else if (circle2Exists === true && circle3Exists == false) {
        circle3.x = mouseX;
        circle3.y = mouseY;
        circle3Exists = true;
    }

    else if (circle3Exists === true && circle4Exists == false) {
        circle4.x = mouseX;
        circle4.y = mouseY;
        circle4Exists = true;
    }

    else if (circle4Exists === true && circle5Exists == false) {
        circle5.x = mouseX;
        circle5.y = mouseY;
        circle5Exists = true;
    }

    else if (circle5Exists === true && circle6Exists == false) {
        circle6.x = mouseX;
        circle6.y = mouseY;
        circle6Exists = true;
    }

}