function LoadGameAssets(){
    starFrames = []

    menuSelection = loadSound('Game Files/Sounds/Sound Effects/audio (2).mp3')
    menuHover = loadSound('Game Files/Sounds/Sound Effects/menu-selection-102220.mp3')
  
    null_ = loadImage('Game Files/Background/nothing.png')
  
    backButtonImg = loadImage('Game Files/Backz Buttons/Back R.png')
    backHoverImg = loadImage('Game Files/Backz Buttons/Back H.png')
  
    //main menu
    playIMG = loadImage('Game Files/Play Buttons/play h.png')
    playHoverIMG = loadImage('Game Files/Play Buttons/play.png')
    settingsImg = loadImage('Game Files/Settings Buttons/Setting R.png')
    settingsHoverImg = loadImage('Game Files/Settings Buttons/Settings H.png')
    guideButtonImg = loadImage('Game Files/Guide Buttons/Guide R.png')
    guideHoverButtonImg = loadImage('Game Files/Guide Buttons/Guide H.png')
  
    //play menu
    CharSIMG = loadImage('Game Files/Character Buttons/Avatar Button R.png.png')
    CharSHIMG = loadImage('Game Files/Character Buttons/Avatar Button H.png.png')
  
    arrowL = loadImage('Game Files/Arrow Buttons/Arrow L.png')
    arrowR = loadImage('Game Files/Arrow Buttons/Arrow R.png')
    arrowLH = loadImage('Game Files/Arrow Buttons/Arrow LH.png')
    arrowRH = loadImage('Game Files/Arrow Buttons/Arrow RH.png')
  
    playerW = loadImage('Game Files/Character Selection/White man.png')
    playerT = loadImage('Game Files/Character Selection/Tanned man.png')
    playerB = loadImage('Game Files/Character Selection/Brown man.png')
    playerD = loadImage('Game Files/Character Selection/Dark skin man.png')
    
    DoneR = loadImage('Game Files/Done Button/Done-R.png (1).png')
    DoneH = loadImage('Game Files/Done Button/Done-H.png.png')
  
    oneImg = loadImage('Game Files/Level 1/Level1 R.png')
    oneHImg = loadImage('Game Files/Level 1/Level 1 H.png')
  
    twoImg = loadImage('Game Files/Level 2/Level 2 R.png')
    twoHImg = loadImage('Game Files/Level 2/Level 2 H.png')
    twoLImg = loadImage('Game Files/Level 2/Level 2 L.png')
  
    threeImg = loadImage('Game Files/Level 3/Level 3 R.png')
    threeHImg = loadImage('Game Files/Level 3/Level 3 H.png')
    threeLImg = loadImage('Game Files/Level 3/Level 3 L.png')
  
    fourImg = loadImage('Game Files/Level 4/Level 4 R.png')
    fourHImg = loadImage('Game Files/Level 4/Level 4 H.png')
    fourLImg = loadImage('Game Files/Level 4/Level 4 L.png')
  
    bossImg = loadImage('Game Files/Level Boss/Boss R.png')
    bossHImg = loadImage('Game Files/Level Boss/Boss H.png')
    bossLImg = loadImage('Game Files/Level Boss/Boss L.png')
  
    //settings things
    switchOn = loadImage('Game Files/Settings Switches/On SettingS.png')
    switchH  = loadImage('Game Files/Settings Switches/SettingS H.png')
    switchOff = loadImage('Game Files/Settings Switches/Off SettingS.png')
  
    volumePlus = loadImage('Game Files/Volume Buttons/Volume Buttons Pos R.png')
    volumePlusH = loadImage('Game Files/Volume Buttons/Volume Buttons Pos H.png')
  
    volumeNeg = loadImage('Game Files/Volume Buttons/Volume Buttons Neg R.png')
    volumeNegH = loadImage('Game Files/Volume Buttons/Volume Buttons Neg H.png')
  
    //backgrounds
    clear = loadImage('Game Files/Background/clear bg.png')
    title = loadImage('Game Files/Background/title 4.png')
  
      heartImg = loadImage('Game Files/Sprites/Other Sprites/heart.png')
  
      for(let i = 1; i <= 2; i++) {starFrames.push(`Game Files/Sprites/Other Sprites/star f${i}.png`)}
  
      pauseR = loadImage('Game Files/Sprites/Pause/pause R.png')
      pauseH = loadImage('Game Files/Sprites/Pause/pause H.png')
      playR = loadImage('Game Files/Sprites/Pause/Play R.png')
      playH = loadImage('Game Files/Sprites/Pause/Play H.png')
    
        //level backgrounds
      Level1bg = loadImage('Game Files/Background/Level 1 - Jungle.png')
      Level2bg = loadImage('Game Files/Background/Level 2 - Cave.png')
      Level3bg = loadImage('Game Files/Background/Level 3 - Snowy Mountains.png')
      Level4bg = loadImage('Game Files/Background/Level 4 - Temple.png')
      LevelBossbg = loadImage('Game Files/Background/Level 5 - The Dragons Lair.png')
  
  }

  function Hover(){
    buttonHTP.mouseOver(()=>{
      htpChange = guideHoverButtonImg
      menuHover.play()
    })
  
    buttonHTP.mouseOut(()=>{
      htpChange = guideButtonImg
    })
    
    buttonSetting.mouseOver(()=>{
      settingsChange = settingsHoverImg
      menuHover.play()
    })
  
    buttonSetting.mouseOut(()=>{
      settingsChange = settingsImg
    })
    
    buttonPlay.mouseOver(()=>{
      playChange = playHoverIMG
      menuHover.play()
    })
  
    buttonPlay.mouseOut(()=>{
      playChange = playIMG
    })
  
    buttonAva.mouseOver(()=>{
      avatarChange = CharSHIMG
      menuHover.play()
    })
  
    buttonAva.mouseOut(()=>{
      avatarChange = CharSIMG
    })
  
    buttonDone.mouseOver(()=>{
      doneC = DoneH
      menuHover.play()
    })
  
    buttonDone.mouseOut(()=>{
      doneC = DoneR
    })
  
    buttonBack.mouseOver(()=> {
      if(checkHide){
      backChange = backHoverImg;
      menuHover.play();
      }
    });
    
    buttonBack.mouseOut(()=> {
      if(checkHide){
      backChange = backButtonImg;  
      }
    });
    
    volumePosM.mouseOver(()=>{
      posMC = volumePlusH
    })
  
    volumePosM.mouseOut(()=>{
      posMC = volumePlus
    })
  
    volumePosS.mouseOver(()=>{
      posSC = volumePlusH
    })
  
    volumePosS.mouseOut(()=>{
      posSC = volumePlus
    })
  
    volumeNegM.mouseOver(()=>{
      negMC = volumeNegH
    })
  
    volumeNegM.mouseOut(()=>{
      negMC = volumeNeg
    })
  
    volumeNegS.mouseOver(()=>{
      negSC = volumeNegH
    })
  
    volumeNegS.mouseOut(()=>{
      negSC = volumeNeg
    })
  
    buttonLeftA.mouseOver(()=>{
      lChange = arrowLH
    })
  
    buttonLeftA.mouseOut(()=>{
      lChange = arrowL
    })
  
    buttonRightA.mouseOver(()=>{
      rChange = arrowRH
    })
  
    buttonRightA.mouseOut(()=>{
      rChange = arrowR
    })
  
    pB.mouseOver(()=>{
      paCge = pauseH
    })
    pB.mouseOut(()=>{
      paCge = pauseR
    })
  
    plB.mouseOver(()=>{
      plCge = playH
    })
    plB.mouseOut(()=>{
      plCge = playR
    })
  }