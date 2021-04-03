var piano,piano1,piano2,piano3,ball;

function preload(){
    music = loadSound("music.mp3");
    bgImg = loadImage("bg.png");
    ballImg = loadImage("ball.png");
    ball1Img = loadImage("ball1.png");
    ball2Img = loadImage("ball2.png");
    ball3Img = loadImage("ball3.png");
    pinoImg = loadImage("pino1.png");
    pino1Img = loadImage("pino 3.PNG");
    pino2Img = loadImage("pino3.png");
    pino3Img = loadImage("pino4.png");
}


function setup(){
    canvas = createCanvas(1000,600);
    ball=createSprite(random(150,850),50,50,50)
    ball.addImage("stop",ballImg);
    ball.addImage("start",ball3Img);
    ball.addImage("bal1",ball2Img);
    ball.addImage("b2",ball1Img);
    ball.scale=0.13;
    ball.velocityX=5;
    ball.velocityY=5;

    //ball.shapeColor ="blue";
    
    piano=createSprite(875,550,250,30)
    piano.addImage(pinoImg);
    
    piano1=createSprite(125,550,300,30)
    piano1.addImage(pino1Img);

    piano2=createSprite(625,550,250,30)
    piano2.addImage(pino2Img);

    piano3=createSprite(375,550,1200,30)
    piano3.addImage(pino3Img);



    //create box sprite and give velocity

}

function draw() {
    background(bgImg);
    //create edgeSprite
    edge=createEdgeSprites();
    ball.addImage("start",ball3Img);
    ball.addImage("bal1",ball2Img);
    ball.addImage("b2",ball1Img);
    fill("yellow");
    text(mouseX+","+mouseY,mouseX,mouseY);
    ball.bounceOff(edge);
    console.log( music.play())
    if(piano.isTouching(ball)&&ball.bounceOff(piano)){
        //ball.bounceOff(piano);
        ball.addImage("start",ball3Img);
        ball.changeImage("start")
        music.play(); 
        ball.scale=0.3;
    }
    if(piano1.isTouching(ball)&&ball.bounceOff(piano1)){
        //ball.bounceOff(piano1)
        ball.addImage("bal1",ball2Img);
        ball.changeImage("bal1")
        //music.play(); 
        ball.scale=0.3;
    }
    if(piano2.isTouching(ball)&&ball.bounceOff(piano2)){
        
        ball.addImage("b2",ball1Img);
        ball.changeImage("b2")
        //music.play(); 
        ball.scale=0.3;
    }
    if(ball.isTouching(piano3)){
        //ball.addImage("ball",ball3Img);
        ball.changeImage("stop");
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop(); 
    }
    else{
        ball.velocityX=5;
        ball.velocityY=5;
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
