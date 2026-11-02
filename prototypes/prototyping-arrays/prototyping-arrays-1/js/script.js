/**
 * Prototyping Arrays 1: 
 * Sydney Tan
 * 
 * Goldfish feeding simulator
 */

"use strict";

let goldfish = {
    x: 400,
    y: 500,
    size: 50,
    speed: 2,
    direction: 1
};

let snacks = [];

/**
*/
function setup() {
    createCanvas(800, 800);
}


/**
*/
function draw() {
    background(220, 210, 200);
    drawFurniture();

    for (let snack of snacks) {
        drawFood(snack);
    }

    drawGoldfish();
    goldfishMove();
}

function drawFurniture() {

    strokeWeight(20);
    stroke(190, 150, 130);
    fill(170, 200, 225)
    rect(500, 200, 200, 200)
    line(600, 200, 600, 400);
    line(500, 300, 700, 300);

    noStroke();
    fill(190, 150, 130);
    rect(0, 600, 800, 200);

    fill(255, 255, 255, 155);
    rect(150, 300, 500, 300);

    fill(170, 210, 255, 180);
    rect(170, 320, 460, 260);

}

//when the mouse is pressed, spawns in goldfish food at the mouse location
function mousePressed() {
    // const food = feedTheFish();
    snacks.push(feedTheFish(mouseX, mouseY));
}

//draws the goldfish
function drawGoldfish() {

    fill(255, 150, 100);
    circle(goldfish.x, goldfish.y, goldfish.size);
    if (goldfish.direction === 1) {
        fill(255, 150, 100);
        triangle(goldfish.x - goldfish.size / 2 + 10, goldfish.y, goldfish.x - goldfish.size / 2 - 20, goldfish.y - 10, goldfish.x - goldfish.size / 2 - 10, goldfish.y + 10);
        fill(60);
        circle(goldfish.x + goldfish.size / 4, goldfish.y - goldfish.size / 8, goldfish.size / 8);
    } else {
        fill(255, 150, 100);
        triangle(goldfish.x + goldfish.size / 2 - 10, goldfish.y, goldfish.x + goldfish.size / 2 + 20, goldfish.y - 10, goldfish.x + goldfish.size / 2 + 10, goldfish.y + 10);
        fill(60);
        circle(goldfish.x - goldfish.size / 4, goldfish.y - goldfish.size / 8, goldfish.size / 8);
    }

}

//goldfish movement function
function goldfishMove() {
    goldfish.x += goldfish.speed * goldfish.direction;
    goldfish.y += random(-0.5, 0.5);

    if (goldfish.x < 190 + goldfish.size / 2 || goldfish.x > 610 - goldfish.size / 2) {
        goldfish.direction *= -1;
    }
}

function feedTheFish(x, y) {
    const food = {
        x: x,
        y: y,
        size: 10,
        speed: 1,
        fill: [255, 200, 100]
    }
    return food;
}

function drawFood(food) {
    push();
    fill(food.fill);
    circle(food.x, food.y, food.size);
    pop();
}