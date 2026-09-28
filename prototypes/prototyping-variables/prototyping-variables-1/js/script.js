/**
 * Prototyping Variables 1: The Passing of Seasons
 * Sydney Tan
 * 
 * Prototype where moving the mouse makes the leaves turns from spring/summer to autumn
 * Unfortunately the tree's already dead without needing winter to come
 * It has so little leaves I feel a bit bad for it 
*/

"use strict";

//VARIABLES

//leaf colours
let tree = {
    r: 100,
    g: 190,
    b: 70
}

//position and scale of leaf 1
let leaf1 = {
    x: 440,
    y: 80,
    size: 20
}

//postion and scale of leaf 2
let leaf2 = {
    x: 200,
    y: 600,
    size: 20
}

//position and scale of leaf 3
let leaf3 = {
    x: -80,
    y: 580,
    size: 20
}

//position and scale of leaf 4
let leaf4 = {
    x: 400,
    y: 90,
    size: 20
}

//position and scale of leaf 5
//i tried making a randomized leaf location but it didnt work how I wanted it to work so I gave up
//was too lazy to change the name from leafR for leaf random to leaf5
let leafR = {
    x: 410,
    y: 300,
    size: 20
}

/**
 * creating canvas and tried to add randomizer
*/
function setup() {
    createCanvas(800, 800)


    //attempt at making a randomized leaf position
    //it worked but the positions for every one of the leafR was the same so it looked like there was only 1 leaf
    //would have to make a new individual set of variables for each individual leaves so gave up
    // leafR.x = random(200, 500)
    // leafR.y = random(200, 400)
}


/**
*/
function draw() {
    background(180, 200, 255);

    //temporary tree leaves
    // fill(tree.r, tree.g, tree.b);
    // ellipse(width / 2 + 10, 280, 370, 350)

    //ground
    fill(130, 80, 50);
    noStroke();
    ellipse(width / 2, 700, 1400, 300);

    //tree trunk
    fill(110, 60, 30);
    rectMode(CENTER)
    rect(width / 2, 400, 40, 300)

    //tree branches
    triangle(400, 300, 400, 350, 300, 200)
    triangle(400, 500, 400, 450, 550, 300)
    triangle(500, 360, 510, 350, 560, 360)
    triangle(380, 250, 420, 260, 470, 180)

    // fill(220, 80, 30)
    // circle(width / 2, height / 2, 600)

    //leaf 1
    push()
    angleMode(DEGREES)
    rotate(30)
    fill(tree.r, tree.g, tree.b)
    circle(leaf1.x, leaf1.y, leaf1.size)
    triangle(leaf1.x - 9, leaf1.y - 5, leaf1.x, leaf1.y - 20, leaf1.x + 9, leaf1.y - 5)
    triangle(leaf1.x - 9, leaf1.y + 5, leaf1.x, leaf1.y + 20, leaf1.x + 9, leaf1.y + 5)
    pop()

    //leaf 2
    push()
    angleMode(DEGREES)
    rotate(-30)
    fill(tree.r, tree.g, tree.b)
    circle(leaf2.x, leaf2.y, leaf2.size)
    triangle(leaf2.x - 9, leaf2.y - 5, leaf2.x, leaf2.y - 20, leaf2.x + 9, leaf2.y - 5)
    triangle(leaf2.x - 9, leaf2.y + 5, leaf2.x, leaf2.y + 20, leaf2.x + 9, leaf2.y + 5)
    pop()

    //leaf 3
    push()
    angleMode(DEGREES)
    rotate(-60)
    fill(tree.r, tree.g, tree.b)
    circle(leaf3.x, leaf3.y, leaf3.size)
    triangle(leaf3.x - 9, leaf3.y - 5, leaf3.x, leaf3.y - 20, leaf3.x + 9, leaf3.y - 5)
    triangle(leaf3.x - 9, leaf3.y + 5, leaf3.x, leaf3.y + 20, leaf3.x + 9, leaf3.y + 5)
    pop()

    //leaf 4
    push()
    angleMode(DEGREES)
    rotate(20)
    fill(tree.r, tree.g, tree.b)
    circle(leaf4.x, leaf4.y, leaf4.size)
    triangle(leaf4.x - 9, leaf4.y - 5, leaf4.x, leaf4.y - 20, leaf4.x + 9, leaf4.y - 5)
    triangle(leaf4.x - 9, leaf4.y + 5, leaf4.x, leaf4.y + 20, leaf4.x + 9, leaf4.y + 5)
    pop()

    //leaf 5
    push()
    angleMode(DEGREES)
    rotate(-10)
    Leaf()
    pop()

}

//function that changes the leaves' colour when the mouse is moved
//the values of the colours is capped whe they reach a specific number
function mouseMoved() {
    tree.r += 0.4
    if (tree.r > 220) {
        tree.r = 220
    }

    tree.g -= 0.1
    if (tree.g < 80) {
        tree.g = 80
    }

    tree.b -= 0.2
    if (tree.b < 30) {
        tree.b = 30
    }
}

//function for creating leaves
//i was going to use this to make multiple leaves easily
//all of the leaves created had the exact same x and y values so they looked like 1 leaf
//rn it functions in the exact same way as the leaves in the draw function
function Leaf() {
    fill(tree.r, tree.g, tree.b)
    circle(leafR.x, leafR.y, leafR.size)
    triangle(leafR.x - 9, leafR.y - 5, leafR.x, leafR.y - 20, leafR.x + 9, leafR.y - 5)
    triangle(leafR.x - 9, leafR.y + 5, leafR.x, leafR.y + 20, leafR.x + 9, leafR.y + 5)
}