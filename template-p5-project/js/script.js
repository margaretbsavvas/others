"use strict";

//position and size of our avatar
let avatarX;
let avatarY;
let avatarSize= 70;

//speed and velocity of our avatar
let avatarSpeed= 10;
let avatarVX= 0;
let avatarVY= 0;

//inserting variables for backgrounds, avatar
let avatar;
let myroom;

//variables for text
let titleString= "MY SAFE SPACE";
let enterString = "press ENTER";
let gameonString= "This is my bedroom. The safest of safe for me."
let petString= "Use the arrow keys to move Susu around my room."

let state = `title`;

function preload (){
  avatar = loadImage ("assets/images/susu.png");
  myroom = loadImage ("assets/images/myroom.jpg");
}
function setup() {
  createCanvas (1000, 600);
  noStroke();

  textSize(30);
  textAlign(CENTER, CENTER);
  textFont('Helvetica');

  //placing avatar in center
  avatarX = width/2;
  avatarY = width/2;
}


function draw() {
  if (state === `title`) {
    title();
 }

  else if (state === `gameon`){
    gameon();
 }
}

function title() {
   background(168, 131, 50);
   background (myroom, 0, 0, width, height);
   fill(166, 128, 5);
   textSize(50);
   text(titleString, width /2, height /8);
   textSize(30);
   text(enterString, width/2, height/5);
}

function gameon() {
  //binding keys to move avatar and setting avatar's velocity on x and y
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }
  else{
    avatarVX = 0; //default avatar x velocity to 0
  }

  //up and down
  if (keyIsDown(UP_ARROW)){
    avatarVY= -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)){
    avatarVY = avatarSpeed;
  }
  else{
    avatarVY = 0; //default avatar y velocity to 0
  }
  //moving avatar based on the velocity
  avatarX= avatarX + avatarVX;
  avatarY= avatarY+ avatarVY;

  image(myroom, 0, 0, width, height);
  image(avatar, avatarX, avatarY, avatarSize, avatarSize);

  fill(168, 131, 50);
  textSize(40);
  text(gameonString, width /2, height /7);
  textSize(30);
  text(petString, width/2, height/ 5);
}
// press ENTER to begin game
  function keyPressed(){
    if (state ===`title`) {
      state = `gameon`;
    }
  }
