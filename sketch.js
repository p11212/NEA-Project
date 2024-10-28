const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies,
Events = Matter.Events,
Collision = Matter.Collision,
Detector = Matter.Detector,
Query = Matter.Query;

 var plat1, plat2, plat3
  keys = {}

  paused = false

var buttonPlay,buttonSetting,buttonHTP
const n = 1.5
var checkHide = false

var playChange
var play

inputs = [] 
buttons = []
CharChange = []

sFX = []

one = menuState = levelState = MenuState = 0

function preload(){LoadGameAssets()}

function setup(){
  canvas = createCanvas(screen.width*n,screen.height*n);

  engine = Engine.create()
  world = engine.world
  world.gravity.y = 1;
  move = 0

  ground = new Platform(width/2,height,width+100,20)
  barrier = new Platform(-10,height/2,20,height)

  killB = new Spikes(width/2,height-40,30,30)
  completeLevel = new Complete(width,height-25,30,30)

  Matter.Runner.run(engine)
 
  bPlay()
  bSetting()
  bHTP()
  bBack()
  volumeButtons()
  AvatarSelection()
  pauseGame()

  mainMusic = createjs.Sound.registerSound("Game Files/Sounds/Sound Tracks/Menu Main Music.mp3", "sound")
  levelOneST = createjs.Sound.registerSound("Game Files/Sounds/Sound Tracks/Level 1 Music - Forest.mp3", "one")

  window.addEventListener('click', (()=>{createjs.Sound.play("sound", {loop: -1})}), { once: true })

  levelOne = new LevelButtons(false,oneImg,oneHImg)
  levelOne.createbutton(1060,-300,300)

  levelTwo = new LevelButtons(twoLImg,twoImg,twoHImg)
  levelTwo.createbutton(1060,100,300)

  levelThree = new LevelButtons(threeLImg,threeImg,threeHImg)
  levelThree.createbutton(1060,500,300)

  levelFour = new LevelButtons(fourLImg,fourImg,fourHImg)
  levelFour.createbutton(1060,900,300)

  levelBoss = new LevelButtons(bossLImg,bossImg,bossHImg)
  levelBoss.createbutton(1860,300,300)

  player1 = new Player()

  levels = [levelOne,levelTwo,levelThree,levelFour,levelBoss]

  function level1(){
    MenuState = 4
    levelState = 1

    for(i of levels){i.hid()}
  
    select = paused = false

    buttonAva.hide()
    avatarChange = plCge = null_

    plB.hide()
    pB.show()

    paCge = pauseR

    player1.LoadAssets(Character)
    player1.respawn(70,70)

    createjs.Sound.stop("sound")
    createjs.Sound.play("one", {loop: -1})
  }

  posMC = posSC = negMC = negSC = doneC = muteSC = muteMC = avatarChange = lChange = rChange = backChange = null_;
  clicks = CharIteration = 0
  Mvolume = SFXvolume = 100

  for(i of levels){i.hid()}
  for(i of volumes){i.hide()}
  for(i of switches){i.hide()}

  lives = 3
  Character = 1
  select = false
  bgChange = clear

  inputs.push(leftI = new Input(2400,220,"A"),rightI = new Input(2400,375,"D"),jumpI = new Input(2400,530,"Space"))
  inputs.forEach(element =>{element.hid()})
  inputs.forEach(element => {element.mousePressed()});

  buttonDone.hide()
  buttonRightA.hide()
  buttonLeftA.hide()
  buttonAva.hide()

  playChange = playIMG
  settingsChange = settingsImg
  htpChange = guideButtonImg

  buttons.push(buttonPlay,buttonHTP,buttonSetting,buttonBack)
  CharChange.push(null_,playerW,playerT,playerB,playerD)
  sFX.push(menuHover,menuSelection)

  buttonPlay.mouseClicked(()=>{
    if(window.devicePixelRatio*100 === 100){
    MenuState = 1
    checkHide = true
    menuSelection.play()
    backChange = backButtonImg
    
    for(i of levels){
      i.showImg()
      i.show()
    }

    avatarChange = CharSIMG
    select = false
  }
  });
  buttonHTP.mouseClicked(()=>{
    if(window.devicePixelRatio*100 === 100){
    MenuState = 3
    checkHide = true
    menuSelection.play()
    backChange = backButtonImg
  }
  });
  buttonSetting.mouseClicked(()=>{
    if(window.devicePixelRatio*100 === 100){
    MenuState = 2
    checkHide = true
    menuSelection.play()
    backChange = backButtonImg

    inputs.forEach(element =>{element.show()})

    posMC = volumePlus
    posSC = volumePlus
    negMC = volumeNeg
    negSC = volumeNeg

    if(m === 0){muteMC = switchOff}
    else{muteMC = switchOn}
      
    if(s === 0){muteSC = switchOff}
    else{muteSC = switchOn}
      
    
  }
  });
  buttonBack.mouseClicked(()=>{
    if(window.devicePixelRatio*100 === 100){
    if(MenuState != 4){
    MenuState = 0
    checkHide = false
    menuSelection.play()

    paused = select = false

    playChange = playIMG
    settingsChange = settingsImg
    htpChange = guideButtonImg

    inputs.forEach(element =>{element.hid()})

    buttonRightA.hide()
    buttonLeftA.hide()

    posMC = posSC = negMC = negSC = doneC = muteSC = muteMC = paCge = plCge = avatarChange = null_;

    buttonAva.hide()

    for(i of levels){i.hid()}
    for(i of volumes){i.hide()}
    for(i of switches){i.hide()}
      
  }
  else if(clicks === 1&&lives != 0||completeLevel.isComplete() === true){
    MenuState = 1
    levelState = 0
    checkHide = true
    menuSelection.play()
    backChange = backButtonImg

    buttonBack.position(-20,-340)

    createjs.Sound.stop()
    createjs.Sound.play("sound",{loop:-1})

    clicks = 0
    
    for(i of levels){
      i.showImg()
      i.show()
    }

    avatarChange = CharSIMG
    select = false
  }
  else if(MenuState === 4&&lives != 0){clicks += 1}
  else if(lives === 0){
    lives = 3

    MenuState = 1
    levelState = 0
    checkHide = true
    menuSelection.play()
    backChange = backButtonImg

    buttonBack.position(-20,-340)

    avatarChange = CharSIMG
    select = false

    clicks = 0

    createjs.Sound.stop()
    createjs.Sound.play("sound",{loop:-1})
    
    for(i of levels){
      i.showImg()
      i.show()
    }
  }
}
  })

  buttonAva.mouseClicked(()=>{
    if(window.devicePixelRatio*100 === 100){
    select = true
    menuSelection.play()
    doneC = DoneR
    CharIteration = Character

    lChange = arrowL
    rChange = arrowR
    }
  })

  buttonDone.mouseClicked(()=>{
    select = false
    buttonDone.hide()
    menuSelection.play()

    backChange = backButtonImg
    avatarChange = CharSIMG

    for(i of levels){
      i.showImg()
      i.show()
    }

    Character = CharIteration
    player1.LoadAssets(Character)
    CharIteration = 0
  })

  buttonLeftA.mouseClicked(()=>{
    if(CharIteration != 1){
    CharIteration = CharIteration-1
    }
  })

  buttonRightA.mouseClicked(()=>{
    if(CharIteration != 4){
    CharIteration = CharIteration+1
    }
  })
  pB.mouseClicked(()=>{
    paused = true

    buttonBack.show()
    backChange = backButtonImg

    paCge = null_
    plCge = playR

    pB.hide()
    plB.show()
  })
  plB.mouseClicked(()=>{
    if(lives != 0){
    paused = false
    plB.hide()
    pB.show()

    clicks = 0

    paCge = pauseR
    plCge = null_}
  })
  levelOne.mousePressed(level1)
}
 

function draw(){
  if(window.devicePixelRatio*100 === 100){
  background(bgChange)

  // Makes the buttons hide when the menu changes
  if (checkHide) {
    buttonPlay.hide()
    buttonSetting.hide();
    buttonHTP.hide();
    buttonBack.show();

    bgChange = clear
    titleC = null_
  } 
  else {
    buttonBack.hide()
    buttonPlay.show();
    buttonSetting.show();
    buttonHTP.show();

    backChange = null_
    titleC = title
  }

  Hover()  // Makes the buttons hover

  inputs.forEach(element =>{element.updateChange()})
    
  levelOne.hover(menuHover) 
  levelTwo.hover(menuHover)

  back = image(backChange,buttonBack.x,buttonBack.y+205)
  
  avatar = image(avatarChange,buttonAva.x,buttonAva.y+195)

  PosM = image(posMC,volumePosM.x,volumePosM.y+320)
  NegM = image(negMC, volumeNegM.x,volumeNegM.y+320)

  PosS = image(posSC,volumePosS.x,volumePosS.y+320)
  NegS = image(negSC,volumeNegS.x,volumeNegS.y+320)

  muteMas = image(muteMC,muteM.x,muteM.y+305)
  muteSFX = image(muteSC,muteS.x,muteS.y+300)

  arrowleft = image(lChange,buttonLeftA.x-100,buttonLeftA.y+215)
  arrowright = image(rChange,buttonRightA.x-100,buttonRightA.y+215)

  push()
  imageMode(CENTER)
  titleImg = image(titleC,width/2,350)
  char = image(CharChange[CharIteration],width/2,height/2-75)
  pop()

  done = image(doneC,buttonDone.x,buttonDone.y+205)

  for(i of levels){i.imageR()}
    
  if(!checkHide){
    play = image(playChange,(width - playIMG.width) / 2, 550)
    settings = image(settingsChange,buttonSetting.x,buttonSetting.y+235)
    guide = image(htpChange,buttonHTP.x, buttonHTP.y+205)
  }
  else if(MenuState == 1){ // levels menu
    if(!select&&levelState === 0){
    buttonAva.show()
    buttonBack.show()

    buttonRightA.hide()
    buttonLeftA.hide()

    doneC = rChange = lChange = null_

  }
    else if(select){
    bgChange = "black"

    buttonDone.show()
    buttonAva.hide()
    buttonBack.hide()

    buttonRightA.show()
    buttonLeftA.show()
    
    for(i of levels){i.hid()}
      
    backChange = avatarChange = null_
    }

  }
  else if(MenuState === 2){ // settings

    for(i of volumes){i.show()}
    for(i of switches){i.show()}
      
    push()
    textFont('VT323')
    textSize(120)
    fill("white")
    strokeWeight(100)

    text("Master Volume",500,500)
    text("SFX Volume",500,1000)
    text("Keybinds",1850,500)

    textSize(95)
    text("Move left: ",1865,650)
    text("Move right: ",1865,800)
    text("Jump: ",1865,950)

    text("Mute: ",515,845)
    text("Mute: ",515,1345)
    pop()

    push()
    textAlign(CENTER)
    textFont('VT323')
    textSize(95)
    fill("white")
    strokeWeight(100)

    text(Mvolume,880,670)
    text(SFXvolume,880,1160)
    pop()
    
  }
  else if(MenuState === 3){// how to play
    push()
    textFont('VT323')
    textSize(90)
    fill("white")
    strokeWeight(5)
    
    text(leftI.returnKey().toUpperCase()+" : Move left", 1160,680)
    text(rightI.returnKey().toUpperCase()+" : Move Right", 1160,760)

    if(jumpI.returnKey() === " "){text("SPACE: Jump", 1160, 840)}
    else{text(jumpI.returnKey().toUpperCase()+" : Jump", 1160, 840)}   
    
    text("These keybinds can be changed in settings (the wrench)",420,920)
    text("Progress through the levels with only three hearts",580,1000)
    text("and defeat the boss to win!",1000,1080)
    pop()
  }
  else if(MenuState === 4){
    select = false
    
    buttonAva.hide()
    avatarChange = null_

    for(i of levels){i.hid()}
  }
  if(levelState === 1){
    bgChange = Level1bg

    translate(
      (-player1.getPlayerPos() + width * 0.3) / 0.9,
      -100
    )

    ground.display()
    player1.display()
    killB.display()
    completeLevel.display()

    killB.damage(player1,player1.isDead(),(()=>{ player1.dying(70,70,killB.isDead(),(()=>{if(!player1.isDead()){lives -= 1}}))})) 
    completeLevel.complete(player1,(()=>{}))
    
    if(!paused){
      rectMode(CENTER);
    
      Engine.update(engine);
      
      buttonBack.hide()
      backChange = null_
    
      player1.updateMovement(ground,leftI.returnKey(),rightI.returnKey(),jumpI.returnKey())
        
    push()
    resetMatrix()
    imageMode(CENTER)
    image(paCge,100,100)
  
  pop()
  }
  else{  
    
    push()
    resetMatrix()
    rectMode(CENTER)
    fill(0, 0, 0, 200);
    rect(width/2,height/2, width*1.5, height*1.5);
    pop()

  push()
    if(lives != 0&&completeLevel.isComplete() === false){
    resetMatrix()
    textSize(150)
    textAlign(CENTER)
    textFont("VT323")
    text("Paused", width/2,height/2-300)}
    
    if(clicks === 1){
      fill("red")
      text("ARE YOU SURE YOU WANT TO QUIT?",width/2,height/2+600)
    }
   
    imageMode(CENTER)
    image(plCge,width/2,height/2)
    pop()

    }
  }
  else if(levelState === 2){}
  else if(levelState === 3){}
  else if(levelState === 4){}
  else if(levelState === 5){}

  

}
else{
  textFont('VT323')
  textSize(140)
  fill("red")
  strokeWeight(5)
  text("Back to 100% zoom pls else the game will not work.",width/2-1360,height/2-10)
  MenuState = 0
  checkHide = false

  bgChange = clear
  
  playChange = playIMG
  settingsChange = settingsImg
  htpChange = guideButtonImg
  avatarChange = null_

  buttonRightA.hide()
  buttonLeftA.hide()

  posMC = posSC = negMC = negSC = doneC = muteSC = muteMC = paCge = plCge = avatarChange = null_

  select = false

  buttonAva.hide()

  for(i of levels){i.hid()}
  for(i of volumes){i.hide()}
  for(i of switches){i.hide()}
    
}
push()
resetMatrix()
back = image(backChange,buttonBack.x,buttonBack.y+205)

if(MenuState === 1&&!select||MenuState === 4&&!select){
  for(let i = 0;i <= lives;i++){image(heartImg,width-80-i * 250, -50)}}

  if(lives === 0){

    textSize(250)
    textAlign(CENTER)
    textFont("VT323")

    buttonBack.show()
    backChange = backButtonImg

    paCge = null_

    pB.hide()
    player1.isFullyDead(lives)

    paused = true
    text("YOU DIED!",width/2,height/2-200)
    buttonBack.position(width/2-300,height/2-300)
  }
  else if(completeLevel.isComplete() === true&&levelState != 0){
    textSize(250)
    textAlign(CENTER)
    textFont("VT323")

    buttonBack.show()
    backChange = backButtonImg

    paCge = null_
    paused = true
    levelTwo.updateLock(true)
    text("You've completed Level "+levelState,width/2,height/2-200)
    buttonBack.position(width/2-300,height/2-300)

    pB.hide()
    player1.isFullyDead(lives)
  }
pop()
}
