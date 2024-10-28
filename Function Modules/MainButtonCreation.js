function volumeButtons(){
    volumePosM = createButton(' ')
    volumePosS = createButton(' ')
    volumeNegM = createButton(' ')
    volumeNegS = createButton(' ')
  
    muteM = createButton(' ')
    muteS = createButton(' ')
  
    s = 0
    m = 0
  
    volumePosM.position(500,220)
    volumeNegM.position(1100,220)
    volumePosS.position(500,710)
    volumeNegS.position(1100,710)
  
    muteM.position(780,430)
    muteS.position(780,930)
  
    volumes = [volumePosM,volumePosS,volumeNegM,volumeNegS]
    switches = [muteM,muteS]
  
    for(i of volumes){
      i.size(200,200)
      i.style('background-color','transparent')
      i.style('border-color','transparent')
    }
  
    for(i of switches){
      i.size(250,100)
      i.style('background-color','transparent')
      i.style('border-color','transparent')
    }
  
    volumePosM.mouseClicked(()=>{
      if(Mvolume != 100){Mvolume = Mvolume+10}
      if(m === 0){createjs.Sound.volume = Mvolume/100}
    })
  
    volumeNegM.mouseClicked(()=>{
      if(Mvolume != 0){Mvolume = Mvolume-10}
      if(m === 0){createjs.Sound.volume = Mvolume/100} 
    })
  
    volumePosS.mouseClicked(()=>{
      if(SFXvolume != 100){SFXvolume = SFXvolume+10}
      if(s === 0){for(sfx of sFX){sfx.setVolume(SFXvolume/100)}} 
    })
  
    volumeNegS.mouseClicked(()=>{
      if(SFXvolume != 0){SFXvolume = SFXvolume-10}
      if(s === 0){for(sfx of sFX){sfx.setVolume(SFXvolume/100)}}
    })
  
      muteM.mouseClicked(()=>{
        if(m === 0){
          m = 1
          muteMC = switchOn
          createjs.Sound.volume = 0}
  
        else if(m === 1){
          m = 0
          muteMC = switchOff
          createjs.Sound.volume = Mvolume/100}
      })
  
      muteS.mouseClicked(()=>{
        if(s === 0){
          s = 1
          muteSC = switchOn
        for(sfxSounds of sFX){sfxSounds.setVolume(0)}
        }
        else if(s === 1){
          s = 0
          muteSC = switchOff
        for(sfxSounds of sFX){sfxSounds.setVolume(SFXvolume/100)}}
      })
    }
  
  function bPlay(){
    buttonPlay = createButton(' ');
    buttonPlay.position((width - playIMG.width) / 2, 315);
    buttonPlay.size(playIMG.width,300)
    buttonPlay.style('background-color','transparent')
    buttonPlay.style('border-color','transparent')
  }
  function bSetting(){
    buttonSetting = createButton(' ')
    buttonSetting.position(580, 800)
    buttonSetting.size(settingsImg.width,300)
    buttonSetting.style('background-color','transparent')
    buttonSetting.style('border-color','transparent')
  }
  
  function bHTP(){
    buttonHTP =  createButton(' ')
    buttonHTP.position(1750, 800)
    buttonHTP.size(guideButtonImg.width,300)
    buttonHTP.style('background-color','transparent')
    buttonHTP.style('border-color','transparent')
  }
  
  function bBack(){
    buttonBack = createButton(' ')
    buttonBack.position(-20,-340)
    buttonBack.size(backButtonImg.width,300)
    buttonBack.style('background-color','transparent')
    buttonBack.style('border-color','transparent')
  }
  
  function AvatarSelection(){
    buttonAva = createButton(' ')
    buttonAva.position(-30,340)
    buttonAva.size(CharSIMG.width,300)
    buttonAva.style('background-color','transparent')
    buttonAva.style('border-color','transparent')
  
    buttonDone = createButton(' ')
    buttonDone.position(width/2-DoneR.width/2,height-DoneR.height-50)
    buttonDone.size(DoneR.width,300)
    buttonDone.style('background-color','transparent')
    buttonDone.style('border-color','transparent')
  
    buttonRightA = createButton(' ')
    buttonRightA.position(2160,200)
    buttonRightA.size(arrowR.width-200,arrowR.width-200)
    buttonRightA.style('background-color','transparent')
    buttonRightA.style('border-color','transparent')
  
    buttonLeftA = createButton(' ')
    buttonLeftA.position(350,200)
    buttonLeftA.size(arrowL.width-200,arrowL.width-200)
    buttonLeftA.style('background-color','transparent')
    buttonLeftA.style('border-color','transparent')
  
  }
  
  function pauseGame(){
    pB = createButton(' ')
    pB.position(10,-345)
    pB.size(200,200)
    pB.style('background-color','transparent')
    pB.style('border-color','transparent')
    pB.class('center')
  
    plB = createButton(' ')
    plB.position(width/2-100,height/2-450)
    plB.size(200,200)
    plB.style('background-color','transparent')
    plB.style('border-color','transparent')
  }