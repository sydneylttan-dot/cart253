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
    direction: 1,
    snacksEaten: 0,
    full: false
};

let snacks = [];

/**
*/
function setup() {
    createCanvas(800, 800);
}

let overlapDetect = {
    right: {
        x: undefined,
        y: undefined
    },
    left: {
        x: undefined,
        y: undefined
    },
    size: undefined
}

/**
*/
function draw() {
    background(220, 210, 200);
    drawFurniture();

    for (let snack of snacks) {
        drawFood(snack);
        foodPhysics(snack);
    }

    drawGoldfish();
    goldfishMove();

    fishEatFood();

    textDisplay();

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
    if (mouseX > 190 && mouseX < 610 && mouseY < 300 && goldfish.snacksEaten < 30) {
        snacks.push(feedTheFish(mouseX, mouseY));
    }

    if (goldfish.snacksEaten >= 30) {
        goldfish.full = true;
    }
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
        size: random(3, 10),
        speed: 4,
        fill: [random(200, 255), random(130, 200), random(50, 100)]
    }
    return food;
}

function drawFood(food) {
    push();
    fill(food.fill);
    circle(food.x, food.y, food.size);
    pop();
}

function foodPhysics(food) {
    food.y += food.speed;


    if (food.y > 580 - food.size / 2) {
        food.speed = 0;
        food.y = 580 - food.size / 2;
    }

    if (food.y > 330) {
        food.speed = 0.3;
    }
}

function fishEatFood() {

    overlapDetect.right.x = goldfish.x + 20;
    overlapDetect.right.y = goldfish.y;

    overlapDetect.left.x = goldfish.x - 20;
    overlapDetect.left.y = goldfish.y;

    overlapDetect.size = 15;

    noFill();
    // fill(255)
    if (goldfish.direction === 1) {
        circle(overlapDetect.right.x, overlapDetect.right.y, overlapDetect.size);
    } else {
        circle(overlapDetect.left.x, overlapDetect.left.y, overlapDetect.size);
    }

    for (let snack of snacks) {

        const d = dist(overlapDetect.right.x, overlapDetect.right.y, snack.x, snack.y);
        const overlap = (d < overlapDetect.size / 2 + snack.size / 2);

        if (overlap) {
            goldfish.snacksEaten++;
            snacks.splice(snacks.indexOf(snack), 1);
        }
    }

    if (goldfish.snacksEaten > 10) {
        goldfish.size = 55;
        goldfish.speed = 1;
    }

    if (goldfish.snacksEaten > 20) {
        goldfish.size = 60;
        goldfish.speed = 0.5;
    }

    if (goldfish.snacksEaten > 30) {
        goldfish.size = 65;
        goldfish.speed = 0.25;
        goldfish.y += random(-0.5, 1);
    }

    if (goldfish.y > 580 - goldfish.size / 2) {
        goldfish.y = 580 - goldfish.size / 2;
    }

}

function textDisplay() {

    if (goldfish.full === true) {
        fill(170, 170, 255);
        textSize(50);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("Plz stop feeding the fish...", 400, 180);
    }

}