var canvas,block1,block2,block3,block4,box,edge1,edge2,edge3;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(100,590,200,20)
block1.shapeColor = "blue"
block2 = createSprite(300,590,200,20)
block2.shapeColor = "red"
block3 = createSprite(500,590,200,20)
block3.shapeColor = "yellow"
block4 = createSprite(700,590,200,20)
block4.shapeColor = "green"
edge1 = createSprite(400,0,800,5)
edge1.visible = false
edge2 = createSprite(0,300,5,600)
edge2.visible = false
edge3 = createSprite(800,300,5,600)
edge3.visible = false


    //create box sprite and give velocity
    box = createSprite(400,200,20,20)
    box.velocityX = 8
    box.velocityY = -10
}

function draw() {
    background("pink");
    drawSprites()
    box.bounceOff(edge1)
    box.bounceOff(edge2)
    box.bounceOff(edge3)
    music.play()
    
    //add condition to check if box touching surface and make it box
if (box.isTouching (block1)) {
    box.shapeColor = "blue" 
    box.bounceOff(block1)    
}
    if (box.isTouching (block2)) {
        box.shapeColor = "red"
        box.bounceOff(block2)
    }
    if (box.isTouching(block3)) {
        box.shapeColor = "yellow"
        box.bounceOff(block3)
    }
    if (box.isTouching(block4)) {
        box.shapeColor = "green"
        box.velocityX = 0
        box.velocityY = 0
        music.stop()
    }

}
