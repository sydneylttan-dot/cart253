/**
 * Final Prototype
 * Sydney Tan
 * 
 * Final prototype idea: Shopping Mall / Grocery Store / CART
 * make an array for possible things that can appear on the shopping list
 * randomize what's on the shelves?
 * make multiple alleys that can be entered?
 */

"use strict";

let shoppingListToggle = false

let sceneSelect = {
    shopFront: true,
    entrance: false
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

    print(sceneSelect.entrance, sceneSelect.shopFront)
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

    if (key === 'w') {
        sceneSelect.entrance = true
        sceneSelect.shopFront = false
    }

    if (key === 'q') {
        sceneSelect.entrance = false
        sceneSelect.shopFront = true
    }

}

function drawShopFront() {
    fill(200, 220, 255)
    rect(0, 0, 1000, 800)
}

function drawEntrance() {
    fill(180, 130, 100)
    rect(100, 100, 100)
}

function sceneManager() {
    if (sceneSelect.entrance === true) {
        drawEntrance()
    }

    if (sceneSelect.shopFront === true) {
        drawShopFront()
    }
}