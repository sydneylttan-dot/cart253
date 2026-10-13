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

let dReady = false;
let aReady = false;
let yReady = false;

let dayTime = true;
let nightTime = false;
let standby = false;

/**
*/
function setup() {
    createCanvas(1000, 500);
}


/**
*/
function draw() {
    background(40);

    //failed attempt at a keyboard typing detector
    // nightTrigger()

    //checking the bool status
    // print(tReady)
    // print(yReady)
    // print(nReady)

    textDisplay()
    reset()

}

//i tried using keyIsPressed before but it wouldn't work well with the ready bools so I changed it to a keyTyped function
function keyTyped() {

    // TYPING NIGHT
    // when night is typed, the lanscape changes to night
    if (key === 'n') {
        nReady = true;
    }

    if (key === 'i' && nReady === true) {
        iReady = true
    }

    if (key === 'g' && iReady === true) {
        gReady = true
    }

    if (key === 'h' && gReady === true) {
        hReady = true
    }

    if (key === 't' && hReady === true) {
        tReady = true
        standby = true
    }

    //-----------------------------------------------------------------------------------//

    // TYPING DAY
    // when day is typed, the landscape changes to day
    if (key === 'd') {
        dReady = true;
    }

    if (key === 'a' && dReady === true) {
        aReady = true;
    }

    if (key === 'y' && aReady === true) {
        yReady = true;
        standby = true
    }

}

function textDisplay() {

    fill(20)
    circle(950, 490, 300)

    fill(255)
    textSize(50)
    textAlign(RIGHT)

    if (dayTime === true && nightTime === false) {
        if (tReady === true) {
            text('night', 970, 470)
        } else if (hReady === true) {
            text('nigh', 970, 470)
        } else if (gReady === true) {
            text('nig', 970, 470)
        } else if (iReady === true) {
            text('ni', 970, 470)
        } else if (nReady === true) {
            text('n', 970, 470)
        }

    }

    if (nightTime === true && dayTime === false) {
        if (yReady === true) {
            text('day', 970, 470)
        } else if (aReady === true) {
            text('da', 970, 470)
        } else if (dReady === true) {
            text('d', 970, 870)
        }
    }



}

function reset() {
    if (dayTime === true) {
        nReady, iReady, gReady, hReady, tReady = false
    }

    if (nightTime === true) {
        dReady, aReady, yReady = false
    }

    print(nReady, iReady, gReady, hReady, tReady, dReady, aReady, yReady)
}



// PREVIOUS ATTEMPT AT KEYBOARD DETECTION
// i tried printing iReady to see if it would become true when typing i after n but it didnt work
// keyIsPressed was not the right choice so I tried the keyTyped function instead and it worked amazingly
// function nightTrigger() {

//     if (keyIsPressed === true) {
//         if (key === 'n') {
//             nReady = true;
//         }
//     }


//     if (nReady === true) {
//         if (keyIsPressed === true) {
//             if (keyIsPressed === 'i') {
//                 iReady = true;
//             }
//         }
//     }


//     if (keyIsPressed === true && iReady === true) {
//         if (keyIsPressed === 'g') {
//             gReady = true;
//         }
//     }

//     if (keyIsPressed === true && gReady === true) {
//         if (keyIsPressed === 'h') {
//             hReady = true;
//         }
//     }

//     if (keyIsPressed === true && hReady === true) {
//         if (keyIsPressed === 't') {
//             tReady = true;
//         }
//     }

//     if (tReady === true) {
//         fill(255)
//         circle(100, 100, 200)
//     }


// }