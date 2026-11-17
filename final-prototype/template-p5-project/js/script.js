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
 */

"use strict";

let shoppingListToggle = false

let sceneSelect = {
    shopFront: true,
    interior: false
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 800)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220, 210, 200)


    sceneManager()

    shoppingListButton()
    moneyCounterDisplay()


    shoppingListDisplay()

    print(sceneSelect.interior, sceneSelect.shopFront)
}

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

function moneyCounterDisplay() {
    noStroke()
    fill(255, 250, 250)
    rect(750, 700, 200, 50)
}

function mouseClicked() {
    if (mouseX > 675 && mouseX < 725 && mouseY > 700 && mouseY < 750) {
        shoppingListToggle = true
    }
}

function keyTyped() {

    //shopping list on/off
    //wanted to make it close on esc, did not work so changed to l
    if (key === 'l' && shoppingListToggle === true) {
        shoppingListToggle = false
    } else if (key === 'l' && shoppingListToggle === false) {
        shoppingListToggle = true
    }


    //temporary scene changes (will change to point and click later)
    if (key === '1') {
        sceneSelect.interior = false
        sceneSelect.shopFront = true
    }

    if (key === '2') {
        sceneSelect.interior = true
        sceneSelect.shopFront = false
    }

}

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

    // //shelf interior
    // fill(170, 170, 180)
    // quad(0, 0, 250, 150, 250, 650, 0, 800)
    // quad(1000, 0, 750, 150, 750, 650, 1000, 800)

}

function sceneManager() {
    if (sceneSelect.interior === true) {
        drawInterior()
    }

    if (sceneSelect.shopFront === true) {
        drawShopFront()
    }
}