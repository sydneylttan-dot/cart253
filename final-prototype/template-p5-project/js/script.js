/**
 * Final Prototype
 * Sydney Tan
 * 
 * Final prototype idea: Shopping Mall / Grocery Store / CART
 * make an array for possible things that can appear on the shopping list
 * randomize what's on the shelves?
 * make multiple alleys that can be entered?
 * 
 * to do:
 * - make things point and click instead of keyboard events
 * - add an array for randomized shopping list items
 * - add an array for randomized shelf elememts??????? or keep all of the elements on the shelf fixed
 * - add a money counter and reduction system
 * - add a view of the cart to see how many things have been bought
 * - self service place? where if you buy veggies, you have to type in the name of the veggie
 * - add scenes of the shelves on the right, left, and in the middle
 * - add the option to head home once shopping is done
 * - add Herbert the fish back home
 * - maybe add dialogue????????
 * 
 * - cut down on some stuff if too complicated (self service system first, and then randomized shelf elements)
 * 
 * - maybe add different minigames per shelf? 
 * - shelf 1: type the food names within a time limit to get the food
 * - shelf 2: the cans move so you have to shoot them to get them (still have to pay attention to money)
 * - shelf 3: elements are available depending on the time of day the player runs the code (time gated food)
 * 
 * 
 * - find a good font
 */

"use strict";


//----------------------------------------------------------------------------------------------//

//VARIABLES

let shoppingListToggle = false

let sceneSelect = {
    shopFront: true,
    interior: false,
    shelf1: false,
    shelf2: false,
    shelfMiddle: false
}

let bal = 0


//----------------------------------------------------------------------------------------------//

//SETUP

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 800)
}


//----------------------------------------------------------------------------------------------//

//DRAW LOOP

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220, 210, 200)


    sceneManager()

    shoppingListButton()
    moneyCounterDisplay()


    shoppingListDisplay()

    if (shoppingListToggle === true) {
        shoppingListCloseButton()
    }

    print(sceneSelect.shopFront, sceneSelect.interior, sceneSelect.shelf1, sceneSelect.shelf2, sceneSelect.shelfMiddle)
}


//----------------------------------------------------------------------------------------------//

//UI ELEMENTS

function shoppingListButton() {
    noStroke()
    fill(255, 250, 250)
    rect(675, 700, 50, 50)
}

function shoppingListDisplay() {

    if (shoppingListToggle === true) {
        noStroke()

        fill(0, 0, 0, 50)
        rect(0, 0, 1000, 800)

        fill(255, 250, 250)
        rect(250, 100, 500, 600)
    }

}

function shoppingListCloseButton() {

    //button
    noStroke()
    fill(255, 250, 250)
    rect(900, 50, 50, 50)

    //X
    fill(50, 40, 40)
    quad(905, 55, 910, 55, 945, 95, 940, 95)
    quad(940, 55, 945, 55, 910, 95, 905, 95)
}

function moneyCounterDisplay() {
    noStroke()
    fill(255, 250, 250)
    rect(750, 700, 200, 50)
}


//----------------------------------------------------------------------------------------------//

//DRAW SCENES

function drawShopFront() {

    //bg
    fill(200, 220, 255)
    rect(0, 0, 1000, 800)

    //road
    fill(180)
    rect(0, 650, 1000, 70)
    fill(50)
    rect(0, 720, 1000, 80)

    //building (left)
    fill(140)
    rect(0, 0, 200, 660)

    //building (right)
    fill(140)
    rect(800, 0, 200, 660)

    //building (top)
    fill(190, 190, 200)
    rect(200, 0, 600, 300)
    fill(210, 210, 210)
    rect(200, 55, 600, 100)

    //shop front
    //the actual shop front
    fill(150, 120, 100)
    rect(150, 290, 700, 370)

    //green roof sign thing
    fill(40, 100, 60)
    rect(100, 250, 800, 50)
    quad(200, 100, 800, 100, 900, 250, 100, 250)

    //door

    // fill(255)
    // textAlign(CENTER)
    // textSize(30)
    // text('GROCERIES', width / 2, 280)

}

function drawInterior() {

    //bg
    fill(170, 140, 130)
    rect(0, 0, 1000, 800)

    //floor (maybe add a reflection to the floor if i have time?)
    fill(210, 190, 180)
    rect(0, 500, 1000, 500)

    push()
    //shelves at the back

    rectMode(CENTER)
    stroke(170, 170, 170)
    strokeWeight(50)
    fill(240, 240, 240)
    rect(width / 2, height / 2, 375, 450)

    //glass
    noStroke()
    fill(200, 230, 255, 100)
    rect(width / 2, height / 2, 325, 400)

    pop()

    //shelves
    fill(210, 210, 220)
    quad(0, -100, 300, 100, 300, 700, 0, 900)
    quad(1000, -100, 700, 100, 700, 700, 1000, 900)

    //shelf interior
    fill(170, 170, 180)
    quad(0, 0, 250, 150, 250, 650, 0, 800)
    quad(1000, 0, 750, 150, 750, 650, 1000, 800)

}

function drawShelf1() {
    //bg
    fill(170, 140, 130)
    rect(0, 0, 1000, 800)

    //shelf base
    fill(210, 210, 220)
    rect(0, 100, 1000, 700)

    //shelf interior
    fill(170, 170, 180)
    rect(50, 200, 900, 200)

    rect(50, 500, 900, 200)

    noStroke()
    fill(255, 250, 250)
    rect(75, 700, 300, 50)

    fill(50, 40, 40)
    textAlign(LEFT)
    textSize(30)
    text('temp text', 85, 735)
}

function drawShelf2() {
    //bg
    fill(170, 140, 130)
    rect(0, 0, 1000, 800)

    //shelf base
    fill(210, 210, 220)
    rect(0, 100, 1000, 700)

    //shelf interior
    fill(170, 170, 180)
    rect(50, 200, 900, 200)

    rect(50, 500, 900, 200)

    rect(0, 0, 100, 100)

    push()
    stroke(255, 0, 0)
    strokeWeight(3)
    noFill()
    circle(mouseX, mouseY, 80)
    line(mouseX - 50, mouseY, mouseX + 50, mouseY)
    line(mouseX, mouseY - 50, mouseX, mouseY + 50)
    pop()

}

function drawShelfMiddle() {
    //bg
    fill(240)
    rect(0, 0, 1000, 800)

    //self interior
    fill(210)
    rect(50, 50, 900, 200)

    rect(50, 300, 900, 200)

    rect(50, 550, 900, 200)
}


//----------------------------------------------------------------------------------------------//

//SCENE MANAGER

function sceneManager() {
    if (sceneSelect.interior === true) {
        drawInterior()
    }

    if (sceneSelect.shopFront === true) {
        drawShopFront()
    }

    if (sceneSelect.shelf1 === true) {
        drawShelf1()
    }

    if (sceneSelect.shelf2 === true) {
        drawShelf2()
    }

    if (sceneSelect.shelfMiddle === true) {
        drawShelfMiddle()
    }
}


//----------------------------------------------------------------------------------------------//

//EVENTS

function mouseClicked() {
    if (shoppingListToggle === false && mouseX > 675 && mouseX < 725 && mouseY > 700 && mouseY < 750) {
        shoppingListToggle = true
        // print('weewoo')
    }

    if (shoppingListToggle === true && mouseX > 900 && mouseX < 950 && mouseY > 50 && mouseY < 100) {
        shoppingListToggle = false
        // print('ah')
    }
}

//will change later for point and click
function keyTyped() {

    //shopping list on/off
    //wanted to make it close on esc, did not work so changed to l
    if (key === 'l' && shoppingListToggle === true) {
        shoppingListToggle = false
    } else if (key === 'l' && shoppingListToggle === false) {
        shoppingListToggle = true
    }


    //temporary scene changes (will change to point and click later)
    if (sceneSelect.interior === true && key === '1') {
        sceneSelect.interior = false
        sceneSelect.shopFront = true
        sceneSelect.shelf1 = false
        sceneSelect.shelf2 = false
        sceneSelect.shelfMiddle = false
    }

    if (key === '2') {
        sceneSelect.interior = true
        sceneSelect.shopFront = false
        sceneSelect.shelf1 = false
        sceneSelect.shelf2 = false
        sceneSelect.shelfMiddle = false
    }

    if (sceneSelect.interior === true && key === '3') {
        sceneSelect.shelf1 = true
        sceneSelect.interior = false
        sceneSelect.shopFront = false
        sceneSelect.shelf2 = false
        sceneSelect.shelfMiddle = false
    }

    if (sceneSelect.interior === true && key === '4') {
        sceneSelect.shelf2 = true
        sceneSelect.shelf1 = false
        sceneSelect.interior = false
        sceneSelect.shopFront = false
        sceneSelect.shelfMiddle = false
    }

    if (sceneSelect.interior === true && key === '5') {
        sceneSelect.shelf1 = false
        sceneSelect.interior = false
        sceneSelect.shopFront = false
        sceneSelect.shelf2 = false
        sceneSelect.shelfMiddle = true
    }

}