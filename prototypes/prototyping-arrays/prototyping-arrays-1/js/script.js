/**
 * Prototyping Arrays 1: Herbert the Goldfish
 * Sydney Tan
 * 
 * This is Herbert. He's your goldfish. Please take care of him.
 * A goldfish feeding simulator where you click anywhere above the tank to feed it. When he eats more and more pellets, he starts to get fat and slows down. After eating 30 pellets, the player becomes unable to feed him anymore. 
 * 
 * CONTROLS:
 * Click the mouse above the goldfish tank to feed it.
 * 
 * Project idea:
 * Goldfish feeding simulator
 */

"use strict";


//VARIABLES

//goldfish variables
//position, size, speed at which it moves, direction of movement, number of snacks eaten, a bool for whether he's full or not
let goldfish = {
    x: 400,
    y: 500,
    size: 50,
    speed: 2,
    direction: 1,
    snacksEaten: 0,
    full: false
};

//for the snacks/food array
let snacks = [];

//for overlap detection between a small circle in front of the goldfish and the food pellets
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
 * creates the canvas
*/
function setup() {
    createCanvas(800, 800);
}

/**
 * draws the bg, calls functions
*/
function draw() {
    background(220, 210, 200);
    drawFurniture();

    drawGoldfish();
    goldfishMove();

    for (let snack of snacks) {
        drawFood(snack);
        foodPhysics(snack);
    }

    fishEatFood();

    textDisplay();

}

//draws the bg furniture and the tank
function drawFurniture() {

    //window
    strokeWeight(20);
    stroke(190, 150, 130);
    fill(170, 200, 225)
    rect(500, 200, 200, 200)
    line(600, 200, 600, 400);
    line(500, 300, 700, 300);

    //table
    noStroke();
    fill(190, 150, 130);
    rect(0, 600, 800, 200);

    //tank glass
    fill(255, 255, 255, 155);
    rect(150, 300, 500, 300);

    //tank water
    fill(170, 210, 255, 180);
    rect(170, 320, 460, 260);

}

//when the mouse is pressed, spawns in goldfish food at the mouse location
//if the goldfish has eaten 30 snacks, the full bool becomes true
function mousePressed() {
    if (mouseX > 190 && mouseX < 610 && mouseY < 300 && goldfish.snacksEaten < 30) {
        snacks.push(feedTheFish(mouseX, mouseY));
    }

    if (goldfish.snacksEaten >= 30) {
        goldfish.full = true;
    }
}

//draws the goldfish
//takes in account the direction its heading in and draws according to it
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

    //if the goldfish reaches the edge of the tank, it turns around
    if (goldfish.x < 190 + goldfish.size / 2 || goldfish.x > 610 - goldfish.size / 2) {
        goldfish.direction *= -1;
    }
}

//creates a food object with random size and color and returns it
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

//draws the food pellets
function drawFood(food) {
    push();
    fill(food.fill);
    circle(food.x, food.y, food.size);
    pop();
}

//food physics. makes the food fall when it spawns in
function foodPhysics(food) {
    food.y += food.speed;

    //if the food reaches the bottom of the tank, it sits there
    if (food.y > 580 - food.size / 2) {
        food.speed = 0;
        food.y = 580 - food.size / 2;
    }

    //if the food is in the water, it slows down
    if (food.y > 330) {
        food.speed = 0.3;
    }
}

//detects when a small circle in front of the fish overlaps with the food
function fishEatFood() {

    //make the overlap circle follow the goldfish
    overlapDetect.right.x = goldfish.x + 20;
    overlapDetect.right.y = goldfish.y;

    overlapDetect.left.x = goldfish.x - 20;
    overlapDetect.left.y = goldfish.y;

    overlapDetect.size = 15;


    //creates the invisible overlap circle
    //mostly just for testing purposes
    noFill();
    // fill(255)
    if (goldfish.direction === 1) {
        circle(overlapDetect.right.x, overlapDetect.right.y, overlapDetect.size);
    } else {
        circle(overlapDetect.left.x, overlapDetect.left.y, overlapDetect.size);
    }

    //checks if the overlap circle overlaps with any of the food pellets
    for (let snack of snacks) {

        const d = dist(overlapDetect.right.x, overlapDetect.right.y, snack.x, snack.y);
        const overlap = (d < overlapDetect.size / 2 + snack.size / 2);

        //if overlap, the food pellet that overlaps will be removed
        //increases an int that keeps count of how many snacks the goldfish has eaten
        if (overlap) {
            goldfish.snacksEaten++;
            snacks.splice(snacks.indexOf(snack), 1);
        }
    }


    //when the goldfish eats certain amounts of food, it gets bigger and slower

    if (goldfish.snacksEaten > 10) {
        goldfish.size = 55;
        goldfish.speed = 1;
    }

    if (goldfish.snacksEaten > 20) {
        goldfish.size = 60;
        goldfish.speed = 0.5;
    }

    //at this point, the golfish will slowly fall to the bottom of the tank
    if (goldfish.snacksEaten >= 30) {
        goldfish.size = 65;
        goldfish.speed = 0.25;
        goldfish.y += random(-0.5, 1);
    }

    //prevent the goldfish from going below the bottom of the tank
    if (goldfish.y > 580 - goldfish.size / 2) {
        goldfish.y = 580 - goldfish.size / 2;
    }

}

//displays the text that tells the player to stop feeding the fish
//displays when the goldfish has eaten 30 snacks (when the full bool is true)
function textDisplay() {

    if (goldfish.full === true) {
        fill(170, 170, 255);
        textSize(50);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("Plz stop feeding the fish...", 400, 170);
    }

}