var canvas;
var box;
var surface1;
var surface2;
var surface3;
function preload(){
}


function setup(){
canvas = createCanvas(900,1500);
surface1=createSprite(60,610,150,50);
surface1.shapeColor="green";
surface2=createSprite(300,610,150,50);
surface2.shapeColor="red";
surface3=createSprite(540,610,150,50);
surface3.shapeColor="blue";
surface4=createSprite(780,610,150,50);
surface4.shapeColor="orange";
    
box=createSprite(250,200,60,50);
box.shapeColor="white";
box.velocityY=15;
}
function draw() {
background(rgb(169,169,169));
if(surface1.isTouching(box) && box.bounceOff(surface1)) {
    "green";   
} 
if(surface2.isTouching(box) && box.bounceOff(surface2)) {
    "red";   
} 
if(surface3.isTouching(box) && box.bounceOff(surface3)) {
    "blue";   
} 
if(surface4.isTouching(box) && box.bounceOff(surface4)) {
    "orange";   
} 

edges=createEdgeSprites();
drawSprites();
}
