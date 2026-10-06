/**
 * Prototyping Conditionals 2 : Colour Mixing
 * Sydney Tan

    A project that draws 3 circles at the first 3 spots the mouse clicks
    When the circles overlap, they begin to change colour
    Eventually, all the colours mix and cover the screen

    Originally, I was going to make 6 circles, but that was too time consuming and repetitive so I decided against


 */

"use strict";


//VARIABLES

//variables that determine if a circle should be drawn or not
let circle1Exists = false;
let circle2Exists = false;
let circle3Exists = false;
// let circle4Exists = false;
// let circle5Exists = false;
// let circle6Exists = false;

//variables for the circles' x, y, size, and colours
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

// let circle4 = {
//     x: undefined,
//     y: undefined,
//     size: 1,

//     r: 255,
//     g: 255,
//     b: 255
// }

// let circle5 = {
//     x: undefined,
//     y: undefined,
//     size: 1,

//     r: 255,
//     g: 255,
//     b: 255
// }

// let circle6 = {
//     x: undefined,
//     y: undefined,
//     size: 1,

//     r: 255,
//     g: 255,
//     b: 255
// }

/**
*/
function setup() {
    createCanvas(600, 900);
}


/**
*/
function draw() {
    background(40);


    // noFill();
    // stroke(255);

    Circle();

}


//drawing the circles and increasing their size if the exist bools are true
function Circle() {
    stroke(circle1.r, circle1.g, circle1.b);
    // circle(mouseX, mouseY, circle1.size);

    // if (mouseIsPressed) {
    //     circle(circle1.x, circle1.y, circle1.size);
    // }

    if (circle1Exists === true) {
        circle1.size += 1;

        fill(circle1.r, circle1.g, circle1.b, 100)
        stroke(circle1.r, circle1.g, circle1.b)
        circle(circle1.x, circle1.y, circle1.size);
    }

    if (circle2Exists === true) {
        circle2.size += 1;

        fill(circle2.r, circle2.g, circle2.b, 100)
        stroke(circle2.r, circle2.g, circle2.b)
        circle(circle2.x, circle2.y, circle2.size);
    }

    if (circle3Exists === true) {
        circle3.size += 1;

        fill(circle3.r, circle3.g, circle3.b, 100)
        stroke(circle3.r, circle3.g, circle3.b)
        circle(circle3.x, circle3.y, circle3.size);
    }

    // if (circle4Exists === true) {
    //     circle4.size += 1;

    //     fill(circle4.r, circle4.g, circle4.b, 100)
    //     stroke(circle4.r, circle4.g, circle4.b)
    //     circle(circle4.x, circle4.y, circle4.size);
    // }

    // if (circle5Exists === true) {
    //     circle5.size += 1;

    //     fill(circle5.r, circle5.g, circle5.b, 100)
    //     stroke(circle5.r, circle5.g, circle5.b)
    //     circle(circle5.x, circle5.y, circle5.size);
    // }

    // if (circle6Exists === true) {
    //     circle6.size += 1;

    //     fill(circle6.r, circl62.g, circle6.b, 100)
    //     stroke(circle6.r, circle6.g, circle6.b)
    //     circle(circle6.x, circle6.y, circle6.size);
    // }

    Contact();
}

//when the mouse is clicked, lock the circles' x and y positions and make exist bools true
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

    // else if (circle3Exists === true && circle4Exists == false) {
    //     circle4.x = mouseX;
    //     circle4.y = mouseY;
    //     circle4Exists = true;
    // }

    // else if (circle4Exists === true && circle5Exists == false) {
    //     circle5.x = mouseX;
    //     circle5.y = mouseY;
    //     circle5Exists = true;
    // }

    // else if (circle5Exists === true && circle6Exists == false) {
    //     circle6.x = mouseX;
    //     circle6.y = mouseY;
    //     circle6Exists = true;
    // }

}

//when the circles overlap, their colours change
function Contact() {

    //contact 1/2
    const d12 = dist(circle1.x + circle1.size, circle1.y + circle1.size, circle2.x + circle2.size, circle2.y + circle2.size)
    const overlap12 = (d12 < circle1.size / 2 + circle2.size / 2)

    if (overlap12) {
        // print("waaaaaa")
        circle1.r -= 1
        circle2.g -= 1
    }

    //contact 1/3
    const d13 = dist(circle1.x + circle1.size, circle1.y + circle1.size, circle3.x + circle3.size, circle3.y + circle3.size)
    const overlap13 = (d13 < circle1.size / 2 + circle3.size / 2)

    if (overlap13) {
        circle1.g -= 1
        circle3.r -= 1
        circle3.b += 0.1
    }

    //contact 2/3
    const d23 = dist(circle2.x + circle2.size, circle2.y + circle2.size, circle3.x + circle3.size, circle3.y + circle3.size)
    const overlap23 = (d23 < circle2.size / 2 + circle3.size / 2)

    if (overlap23) {
        circle2.b -= 1
        circle3.b -= 1
    }

}