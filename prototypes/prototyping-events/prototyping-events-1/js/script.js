/**
 * Protyping Events 1: Time of Day
 * Sydney Tan
 * 
 * A prototype where the time of day changes when night or day is typed
 * 
 * Controls: 
 * ENTER: enables night/day to be typed
 * keyboard: type "night" to change the time of day to night / type "day" to change the time of day to day
 * 
 * 
 * the concept of the prototype:
    landscape: if "night" is written, the landscape will change to night, if "day" is written, the landscape will change to day
    when ENTER is typed, 

* Uses:
 * p5.js
 * https://p5js.org
    */

"use strict";

//VARIABLES

//variables to check when a specific key is pressed
//for night
let nReady = false;
let iReady = false;
let gReady = false;
let hReady = false;
let tReady = false;

//for day
let dReady = false;
let aReady = false;
let yReady = false;

//variables to set the time of day for the bg changes
let dayTime = true;
let nightTime = false;
// let standby = false;

//variables for the states in between day and night to check which keys can be pressed
let waitingForNight = false;
let waitingForDay = false;

//check if a word is in the process of getting typed, becomes true when ENTER is typed
let isTyping = false;

//variables to change the bg colour
let bgColour = {
    r: 40,
    g: 40,
    b: 40
}

//variables to change the alpha of the text (to make it visible/invisble) and the circle that changes the sun into a moon
let alpha = {
    moon: 0,
    nightText: 0,
    dayText: 0
}

/**
 * create canvas
*/
function setup() {
    createCanvas(1000, 500);
}


/**
 * creating a bg with variables as colours and calling functions
*/
function draw() {
    background(bgColour.r, bgColour.g, bgColour.b);

    //failed attempt at a keyboard typing detector
    // nightTrigger()

    //checking the bool status
    // print(tReady)
    // print(yReady)
    // print(nReady)

    bgChange()
    bg()
    textDisplay()
    reset()

}

//i tried using keyIsPressed before but it wouldn't work well with the ready bools so I changed it to a keyTyped function
//the function that checks which keys are typed and activates the according bools
//activates when the letters that make up "night" and "day" are typed as well as the ENTER key
function keyTyped() {

    // TYPING NIGHT
    // when night is typed, the lanscape changes to night

    if (isTyping === true && waitingForNight === true) {
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
            // standby = true
            isTyping = false;
            waitingForNight = false
            dayTime = false;
            nightTime = true;
        }
    }

    //-----------------------------------------------------------------------------------//

    // TYPING DAY
    // when day is typed, the landscape changes to day
    if (isTyping === true && waitingForDay === true) {
        if (key === 'd') {
            dReady = true;
        }

        if (key === 'a' && dReady === true) {
            aReady = true;
        }

        if (key === 'y' && aReady === true) {
            yReady = true;
            isTyping = false;
            nightTime = false;
            dayTime = true
            waitingForDay = false
            // standby = true
        }
    }

    //-----------------------------------------------------------------------------------//

    //CHANGING TIME
    // when ENTER is typed, the letters for day/night can be typed depending on the current time of day
    if (keyCode === 13) {
        // print('aaaaaaa');
        isTyping = true;

        if (dayTime === true && nightTime === false) {
            waitingForNight = true
            // dayTime = false
        }

        if (dayTime === false && nightTime === true) {
            waitingForDay = true
            // nightTime = false
        }

    }

}

//function that displays the circle and text at the bottom right of the canvas
function textDisplay() {

    //the circle at the bottom right
    fill(20)
    circle(950, 490, 300)

    //set the text to white, make its alpha a variable so that it can be changed later, aligned to the right
    fill(255, 255, 255, alpha.nightText)
    textSize(50)
    textAlign(RIGHT)

    //displays the text for night
    //the if/else if go from the last state to the first, tried doing it the ther way, it didnt work too well
    // if (dayTime === true && nightTime === false) {
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

    // }

    //-----------------------------------------------------------------------------------//

    //same thing as what happens for night

    fill(255, 255, 255, alpha.dayText)
    textSize(50)
    textAlign(RIGHT)

    // if (nightTime === true && dayTime === false) {
    if (yReady === true) {
        text('day', 970, 470)
    } else if (aReady === true) {
        text('da', 970, 470)
    } else if (dReady === true) {
        text('d', 970, 470)
        // print('weh')
    }
    // }

}

//function that sets bools back to false and alphas back to invisible/visible when the time of day changes
function reset() {
    if (waitingForDay === true) {
        nReady = false
        iReady = false
        gReady = false
        hReady = false
        tReady = false
        // dayTime = false;
    }

    if (waitingForNight === true) {
        dReady = false
        aReady = false
        yReady = false
        // nightTime = false
    }

    if (waitingForDay === true) {
        alpha.dayText = 255
        alpha.nightText = 0
    }

    if (waitingForNight === true) {
        alpha.nightText = 255
        alpha.dayText = 0
    }

    // print(dayTime, nightTime)
    // print(waitingForNight, waitingForDay)
    // print(alpha.dayText)
    // print(nReady, iReady, gReady, hReady, tReady, dReady, aReady, yReady)
    // print(hReady, tReady, dayTime, nightTime)
}

//function that draws the bg elements (hill, house, sun/moon)
function bg() {

    fill(60)
    noStroke()
    ellipse(width / 2, 500, 1500, 300)

    rect(250, 270, 100, 100)
    triangle(225, 290, 300, 230, 375, 290)

    fill(255)
    circle(100, 100, 50)

    fill(40, 40, 40, alpha.moon)
    circle(110, 90, 40)

}

//funtion that changes how the bg looks (the bg colour switch and the alpha of the circle that turns the circle ont he top left from a sun to a moon and the moon to a sun)
function bgChange() {

    if (dayTime === true) {
        bgColour.r = 200
        bgColour.g = 230
        bgColour.b = 255
        alpha.moon = 0
    }

    if (nightTime === true) {
        bgColour.r = 40
        bgColour.g = 40
        bgColour.b = 40
        alpha.moon = 255
    }

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