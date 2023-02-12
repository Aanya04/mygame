var gameState = "start"

function preload(){
 bg1 = loadImage("bg1.jpeg");
 bg2 = loadImage("bg2.jpg");
 bg3 = loadImage("bg3.webp");
 bulletImg = loadImage("bullet1.png");
 eggImg = loadImage("egg.png");
 girlRunning = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png")
 vblockImg = loadImage("vblock.png");
 hblockImg = loadImage("hblock.gif");
 lifeImg = loadImage("life.png");
 resetImg = loadImage("reset.png");
 woodImg = loadImage("wood.png");
 stoneImg = loadImage("stone.png");
 girlStanding = loadAnimation("girl2.png");
 coinImg = loadImage("coin.png");
 gunImg = loadImage("gun1.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  infiniteBg = createSprite(10,height/2);
  infiniteBg.addImage(bg2);

  stonesGroup = createGroup();
  coinsGroup = createGroup();

  ground = createSprite(width/2,height-190,width,10)
  ground.visible = false;

  edges = createEdgeSprites();

  girl = createSprite(100,100);
  girl.addAnimation("standing",girlStanding);
  girl.addAnimation("running",girlRunning);
  girl.scale = 0.7;
  girl.debug = false;
  girl.setCollider("rectangle",0,0,100,150)

  score = 0;

  egg = createSprite(width-70,height-70);
  egg.addImage(eggImg);
  egg.scale = 0.2;

  b1 = createSprite(300,100);
  b1.addImage(vblockImg);
  b1.scale = 0.6;

  b2 = createSprite(223,263);
  b2.addImage(hblockImg);
  b2.scale = 0.6;

  b3 = createSprite(120,500);
  b3.addImage(hblockImg);
  b3.scale = 0.6;

  b4 = createSprite(275,575);
  b4.addImage(vblockImg);
  b4.scale = 0.6;

  b5 = createSprite(800,700);
  b5.addImage(hblockImg);
  b5.scale = 0.6;

  b6 = createSprite(700,625);
  b6.addImage(vblockImg);
  b6.scale = 0.6;

  b7 = createSprite(800,40);
  b7.addImage(hblockImg);
  b7.scale = 0.6;

  b8 = createSprite(650,100);
  b8.addImage(vblockImg);
  b8.scale = 0.6;

  b9 = createSprite(900,350);
  b9.addImage(hblockImg);
  b9.scale = 0.6;

  b10 = createSprite(1030,425);
  b10.addImage(vblockImg);
  b10.scale = 0.6;

  b11 = createSprite(1300,100);
  b11.addImage(vblockImg);
  b11.scale = 0.6;

  b12 = createSprite(1330,500);
  b12.addImage(hblockImg);
  b12.scale = 0.6;

  gun = createSprite(175,100);
  gun.addImage(gunImg);
  gun.scale = 0.1

  level2GameState = "play"
  
  
}

function draw() {
  
  background(180);
  drawSprites();
  if(gameState == "start")
  {
    b1.visible = false;
    b2.visible = false;
    b3.visible = false;
    b4.visible = false;
    b5.visible = false;
    b6.visible = false;
    b7.visible = false;
    b8.visible = false;
    b9.visible = false;
    b10.visible = false;
    b11.visible = false;
    b12.visible = false;
    gun.visible = false;
    infiniteBg.visible = false;

    girl.visible = false;
    egg.visible = false;
    background(bg1);
    textSize(80);
    fill("white");
    textAlign(CENTER);
    text("Save Wildlife", width/2,200)
    textSize(40);
    fill("black");
    text("Press enter to begin",width/2,300)
    if(keyDown("enter"))
    {
      gameState = "level3"
    }

  }
  if(gameState=="level1")
  {
    background(bg1);
    girl.visible = true;
    egg.visible = true;
    b1.visible = true;
    b2.visible = true;
    b3.visible = true;
    b4.visible = true;
    b5.visible = true;
    b6.visible = true;
    b7.visible = true;
    b8.visible = true;
    b9.visible = true;
    b10.visible = true;
    b11.visible = true;
    b12.visible = true;
    infiniteBg.visible = false;
    gun.visible = false;

    girl.collide(b1);
    girl.collide(b2);
    girl.collide(b3);
    girl.collide(b4);
    girl.collide(b5);
    girl.collide(b6);
    girl.collide(b7);
    girl.collide(b8);
    girl.collide(b9);
    girl.collide(b10);
    girl.collide(b11);
    girl.collide(b12);
    girl.collide(edges);

    

    girl.changeAnimation("standing")
   
    if(keyDown("right"))
    {
      girl.x += 5;
      girl.changeAnimation("running")
    }

    if(keyDown("left"))
    {
      girl.x -= 5;
      girl.changeAnimation("running")
    }
    if(keyDown("down"))
    {
      girl.y += 5;
      girl.changeAnimation("running")
    }
    if(keyDown("up"))
    {
      girl.y -= 5;
      girl.changeAnimation("running")
    }
    if(girl.isTouching(egg))
    {
      gameState = "level1Finish"
    }
  }
  if(gameState == "level1Finish")
  {
    background(bg1);
    infiniteBg.visible = false;
    gun.visible = false;
    girl.changeAnimation("standing")
    textSize(70);
      fill("white");
      textAlign(CENTER);
      text("Level 1 completed", width/2,200)
      textSize(50);
      fill("white");
      textAlign(CENTER);
      text("Press enter to go to the next level", width/2,300)
      if(keyDown("enter"))
      {
        gameState = "level2";
        girl.x = 100;
        girl.y = 100
      }
  }
  if(gameState == "level2")
  {
    egg.visible = false;
    b1.visible = false;
    b2.visible = false;
    b3.visible = false;
    b4.visible = false;
    b5.visible = false;
    b6.visible = false;
    b7.visible = false;
    b8.visible = false;
    b9.visible = false;
    b10.visible = false;
    b11.visible = false;
    b12.visible = false;
    girl.visible = true;
    gun.visible = false;
    /*girl.x= 100;
    girl.y = height-300;*/
    infiniteBg.visible = true;
    girl.collide(ground);

    fill("white");
    textSize(30)
    text("Score:"+score,width-200,50)
    
    if(level2GameState == "play")
    {
      girl.changeAnimation("running")
      if(keyDown("space"))
      {
        girl.velocityY = -15;
        girl.changeAnimation("standing")
      }
      girl.velocityY+=1;
      infiniteBg.velocityX = -7;
      if(infiniteBg.x<-1000)
      {
        infiniteBg.x = 100;
      }
      createStones();
      createCoins();

      for(var i =0;i<coinsGroup.length;i++)
      {
        if(coinsGroup[i].isTouching(girl))
        {
          coinsGroup[i].destroy()
          score+= 5;
        }
  
        
      }
      if(score==100)
      {
        gameState="level2Finish";
      }
      if(stonesGroup.collide(girl))
      {
        level2GameState="end";
      }
    }
    if(level2GameState=="end")
    {
      infiniteBg.velocityX = 0;
      stonesGroup.setLifetimeEach(-10)
      stonesGroup.setVelocityXEach(0)
      stonesGroup.setVelocityYEach(0)

      coinsGroup.setVelocityXEach(0)
      coinsGroup.setLifetimeEach(-10)


      girl.changeAnimation("standing");
      girl.velocityY = 0;
    }
  }
    if(gameState == "level2Finish")
  {
    background(bg3);
    infiniteBg.visible = false;
    gun.visible = false;
    girl.changeAnimation("standing")
    textSize(70);
      fill("white");
      textAlign(CENTER);
      text("Level 2 completed", width/2,200)
      textSize(50);
      fill("white");
      textAlign(CENTER);
      text("Press enter to go to the next level", width/2,300)
      if(keyDown("enter"))
      {
        gameState = "level3";
        girl.x = 100;
        girl.y = 100
      }
  }
    if(gameState =="level3") 
    {
    
    egg.visible = false;
    b1.visible = false;
    b2.visible = false;
    b3.visible = false;
    b4.visible = false;
    b5.visible = false;
    b6.visible = false;
    b7.visible = false;
    b8.visible = false;
    b9.visible = false;
    b10.visible = false;
    b11.visible = false;
    b12.visible = false;
    girl.visible = true;
    gun.visible = true;

    gun.y = mouseY;
    girl.y=gun.y-20;
    /*girl.x= 100;
    girl.y = height-300;*/
    infiniteBg.visible = true;
    }
}


function createStones()
{
  if(frameCount%100==0)
  {
    stone = createSprite(width+50,height-200);
    stone.velocityX = -7;
    rand = Math.round(random(1,2));
    switch(rand)
    {
      case 1:
        stone.addImage(stoneImg);
        stone.scale = 0.3;
        break;

      case 2:
        stone.addImage(woodImg);
        stone.scale = 0.1;
        break;

      default:
        break;

    }
    stonesGroup.add(stone);
    stone.lifetime = 500;
    stone.debug = false;
    stone.setCollider("circle",0,0,150)
    girl.depth = stone.depth +1;

  }

  
}

function createCoins()
{
  if(frameCount%100 == 0)
  {
    coin = createSprite(width,random(200,height/2))
    coin.velocityX = -7;
    coin.addImage(coinImg);
    coin.scale = 0.3
    coin.lifetime = 500;
    coinsGroup.add(coin);
  }
}