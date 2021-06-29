var canvas;
var music;
var block1;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(0,518,360,30)
    block1.shapeColor="red"

    block2=createSprite(295,580,200,30)
    block2.shapeColor="green"
   
    block3=createSprite(515,580,200,30)
    block3.shapeColor="black"
   
    block4=createSprite(740,580,220,30)
    block4.shapeColor="white"
   
    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="red"
    ball.velocityX=2;
    ball.velocityY=2;
    
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges)
drawSprites()
    //add condition to check if box touching surface and make it box
}
