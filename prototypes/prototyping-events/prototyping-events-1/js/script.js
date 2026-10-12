/**
 * Protyping Events 1: 
 * Sydney Tan
 * 
    landscape: if "night" is written, the landscape will change to night, if "day" is written, the landscape will change to day
 */

"use strict";

let nReady = false;
let iReady = false;
let gReady = false;
let hReady = false;
let tReady = false;

/**
*/
function setup() {
    createCanvas(1000, 500);
}


/**
*/
function draw() {
    background(40);

    nightTrigger()

}

function nightTrigger() {

    if (keyIsPressed === true) {
        if (key === 'n') {
            nReady = true;
        }
    }


    if (nReady === true) {
        if (keyIsPressed === true) {
            if (keyIsPressed === 'i') {
                iReady = true;
            }
        }
    }


    if (keyIsPressed === true && iReady === true) {
        if (keyIsPressed === 'g') {
            gReady = true;
        }
    }

    if (keyIsPressed === true && gReady === true) {
        if (keyIsPressed === 'h') {
            hReady = true;
        }
    }

    if (keyIsPressed === true && hReady === true) {
        if (keyIsPressed === 't') {
            tReady = true;
        }
    }

    if (tReady === true) {
        fill(255)
        circle(100, 100, 200)
    }


}