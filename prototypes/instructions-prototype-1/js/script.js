/**
 * Instructions Prototype 1
 * Sydney Tan
 */


function setup() {
    createCanvas(800, 800);

    describe('A green front facing frog on a green background');
}



function draw() {
    background(120, 220, 100);

    //BACK LEGS
    describe('The frogs back legs are drawn behind the body and are made of ellipses and triangles with circles at their lowest end');
    push();
    fill(80, 170, 40);
    noStroke();
    ellipse(200, 600, 300, 150);
    ellipse(600, 600, 300, 150);
    triangle(130, 640, 70, 710, 180, 640);
    circle(80, 700, 30);
    triangle(670, 640, 730, 710, 620, 640);
    circle(720, 700, 30);
    triangle(150, 640, 130, 720, 180, 640);
    circle(130, 710, 30);
    triangle(650, 640, 670, 720, 620, 640);
    circle(670, 710, 30);
    triangle(180, 640, 190, 720, 210, 640);
    circle(190, 710, 30);
    triangle(620, 640, 610, 720, 590, 640);
    circle(610, 710, 30);
    pop();

    //BODY
    describe('The frogs body is made with one green ellipse serving as base and one slightly yellowish white ellipse for the belly')
    push();
    fill(80, 170, 40);
    noStroke();
    ellipse(width / 2, height / 2 + 170, 500, 300);
    pop();
    push();
    fill(225, 225, 170);
    noStroke();
    ellipse(width / 2, height / 2 + 170, 350, 270);
    pop();

    //FRONT LEGS
    describe('Similarly to the frogs back legs,he frogs front legs are made with ellipses and triangles with circles at their lowest end. The front legs are drawn above the body.')
    push();
    fill(80, 170, 40);
    noStroke();
    angleMode(DEGREES);
    push();
    rotate(-20);
    ellipse(-30, 700, 70, 200);
    pop();
    push();
    rotate(20);
    ellipse(780, 425, 70, 200);
    pop();
    square(200)
    triangle(210, 720, 180, 780, 240, 740);
    circle(190, 770, 30);
    triangle(600, 720, 630, 780, 570, 740);
    circle(620, 770, 30);
    triangle(205, 730, 250, 790, 257, 747);
    circle(250, 780, 30);
    triangle(595, 730, 550, 790, 543, 747);
    circle(550, 780, 30);
    triangle(240, 740, 300, 760, 250, 710);
    circle(290, 750, 30);
    triangle(560, 740, 500, 760, 550, 710);
    circle(510, 750, 30);
    pop();

    //HEAD
    describe('The frogs head is made with one big green ellipse that is centered to the canvas.')
    push();
    fill(80, 170, 40);
    noStroke();
    ellipse(width / 2, height / 2, 400, 270);
    pop();

    //EYES
    describe('The frogs eyes are made with 2 green circles serving as base. There are 2 yellow ellipse above them. These yellow ellipses serve as eyeballs and are placed slightly towards the outside of the eye sockets. There is an additional black ellipse on each of the yellow ellipses. These black ellipses are wider and serve as the frogs pupils.')
    push();
    fill(80, 170, 40);
    noStroke();
    circle(250, 300, 150);
    circle(550, 300, 150);
    pop();
    push();
    fill(225, 200, 40);
    noStroke();
    ellipse(230, 300, 100, 120);
    ellipse(570, 300, 100, 120);
    pop();
    push();
    fill(50, 50, 50);
    noStroke();
    ellipse(215, 300, 70, 50);
    ellipse(585, 300, 70, 50);
    pop();

    //MOUTH
    describe('Unlike the rest of the frog, the mouth is made of lines instead of shapes. The mouth is a slight brownish colour and is made of 2 lines that form a slight V at the center of the frogs head.')
    push();
    strokeWeight(5);
    stroke(170, 100, 20);
    line(210, 430, 400, 440);
    line(400, 440, 590, 430);
    pop();

    //NOSTRILS
    describe('The frogs nostrils are 2 brownish ellipses placed above the frogs nose.')
    push();
    fill(170, 100, 20);
    noStroke();
    ellipse(350, 390, 20, 10);
    ellipse(450, 390, 20, 10);
    pop();
}