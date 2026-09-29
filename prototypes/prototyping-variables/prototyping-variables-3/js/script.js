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

let lowerBG = true;

let bg = {
    r: 40,
    g: 40,
    b: 40
}

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
    background(bg.r, bg.g, bg.b);

    if (bg.r < 40) {
        bg.r = 40
    }

    if (bg.r > 255) {
        bg.r = 255
    }

    if (bg.g < 40) {
        bg.g = 40
    }

    if (bg.g > 255) {
        bg.g = 255
    }

    if (bg.b < 40) {
        bg.b = 40
    }

    if (bg.b > 255) {
        bg.b = 255
    }

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
        lowerBG = false
        bg.r = bg.r + 1
    } else {
        stroke50 = 1
    }

    if (mouseX >= 95 && mouseX <= 105) {
        stroke100 = 5
        lowerBG = false
        bg.r = bg.r + 1
        bg.g = bg.g + 1
    } else {
        stroke100 = 1
    }

    if (mouseX >= 145 && mouseX <= 155) {
        stroke150 = 5
        lowerBG = false

    } else {
        stroke150 = 1
    }

    if (mouseX >= 195 && mouseX <= 205) {
        stroke200 = 5
        lowerBG = false

    } else {
        stroke200 = 1
    }

    if (mouseX >= 245 && mouseX <= 255) {
        stroke250 = 5
        lowerBG = false

    } else {
        stroke250 = 1
    }

    if (mouseX >= 295 && mouseX <= 305) {
        stroke300 = 5
        lowerBG = false

    } else {
        stroke300 = 1
    }

    if (mouseX >= 345 && mouseX <= 355) {
        stroke350 = 5
        lowerBG = false

    } else {
        stroke350 = 1
    }

    if (mouseX >= 395 && mouseX <= 405) {
        stroke400 = 5
        lowerBG = false

    } else {
        stroke400 = 1
    }

    if (mouseX >= 445 && mouseX <= 455) {
        stroke450 = 5
        lowerBG = false

    } else {
        stroke450 = 1
    }

    if (mouseX >= 495 && mouseX <= 505) {
        stroke500 = 5
        lowerBG = false

    } else {
        stroke500 = 1
    }

    if (mouseX >= 545 && mouseX <= 555) {
        stroke550 = 5
        lowerBG = false

    } else {
        stroke550 = 1
    }

    if (mouseX >= 595 && mouseX <= 605) {
        stroke600 = 5
        lowerBG = false

    } else {
        stroke600 = 1
    }

    if (mouseX >= 645 && mouseX <= 655) {
        stroke650 = 5
        lowerBG = false

    } else {
        stroke650 = 1
    }

    if (mouseX >= 695 && mouseX <= 705) {
        stroke700 = 5
        lowerBG = false

    } else {
        stroke700 = 1
    }

    if (mouseX >= 745 && mouseX <= 755) {
        stroke750 = 5
        lowerBG = false

    } else {
        stroke750 = 1
    }

    if (mouseX >= 795 && mouseX <= 805) {
        stroke800 = 5
        lowerBG = false

    } else {
        stroke800 = 1
    }

    if (mouseX >= 845 && mouseX <= 855) {
        stroke850 = 5
        lowerBG = false

    } else {
        stroke850 = 1
    }

    if (mouseX >= 895 && mouseX <= 905) {
        stroke900 = 5
        lowerBG = false

    } else {
        stroke900 = 1
    }

    if (mouseX >= 945 && mouseX <= 955) {
        stroke950 = 5
        lowerBG = false

    } else {
        stroke950 = 1
    }

    if (mouseX < 45 || mouseX > 55 && mouseX < 95 || mouseX > 105 && mouseX < 145 || mouseX > 155 && mouseX < 195 || mouseX > 205 && mouseX < 245 || mouseX > 255 && mouseX < 295 || mouseX > 305 && mouseX < 345 || mouseX > 355 && mouseX < 395 || mouseX > 405 && mouseX < 445 || mouseX > 455 && mouseX < 495 || mouseX > 505 && mouseX < 545 || mouseX > 555 && mouseX < 595 || mouseX > 605 && mouseX < 645 || mouseX > 655 && mouseX < 695 || mouseX > 705 && mouseX < 745 || mouseX > 755 && mouseX < 795 || mouseX > 805 && mouseX < 845 || mouseX > 855 && mouseX < 895 || mouseX > 905 && mouseX < 945 || mouseX > 955) {
        lowerBG = true;
    }

    if (lowerBG == true) {
        bg.r = bg.r - 1
        bg.g = bg.g - 1
        bg.b = bg.b - 1
    }

}