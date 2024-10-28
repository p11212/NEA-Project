const SAT = Matter.SAT

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault()}
  
  keys[e.key] = true;});

document.addEventListener("keyup", (e) => {keys[e.key] = false;});

class Player{
    constructor(){
        this.dead = false

        this.frameDuration = 100
        this.lastFrameTime = 0
        this.currentFrame = 0

        var options = { density: 10, restitution: -1, friction: 5 };
        this.body = Bodies.rectangle(400, 700, 70, 70, options);
        World.add(world, this.body);
    }
    LoadAssets(char){
      if(char === 1){
        var MoveLC = []
        var MoveRC = []

         var idleC = loadImage('Game Files/Sprites/Characters/White Man/White Moving/white f1.png')
          for (let i = 1; i <= 4; i++) {MoveRC.push(loadImage(`Game Files/Sprites/Characters/White Man/White Moving/white f${i}.png`))}
          for (let i = 1; i <= 4; i++) {MoveLC.push(loadImage(`Game Files/Sprites/Characters/White Man/White Moving B/white b${i}.png`))}

          var jumpLC = loadImage(`Game Files/Sprites/Characters/White Man/White Jumping/jump L.png`)
          var jumpRC = loadImage(`Game Files/Sprites/Characters/White Man/White Jumping/jump R.png`)
      }
      else if(char === 2){
          var MoveLC = []
          var MoveRC = []

          var idleC = loadImage('Game Files/Sprites/Characters/Tanned Man/Tanned Man Running Forwards/tanned f1.png')
          for (let i = 1;i <= 4; i++) {MoveRC.push(loadImage(`Game Files/Sprites/Characters/Tanned Man/Tanned Man Running Forwards/tanned f${i}.png`))}
          for (let i = 1;i <= 4; i++) {MoveLC.push(loadImage(`Game Files/Sprites/Characters/Tanned Man/Tanned Man Running Backwards/tanned b${i}.png`))}

          var jumpLC = loadImage('Game Files/Sprites/Characters/Tanned Man/Tanned Man Jumping/tan Jump Left.png')
          var jumpRC = loadImage('Game Files/Sprites/Characters/Tanned Man/Tanned Man Jumping/tan Jump Right.png')
      }
      else if(char === 3){
        var MoveLC = []
        var MoveRC = []

        var idleC = loadImage('Game Files/Sprites/Characters/Brown Man/Brown Man Running/brown f2.png')
        for (let i = 1;i <= 4; i++) {MoveRC.push(loadImage(`Game Files/Sprites/Characters/Brown Man/Brown Man Running/brown f${i}.png`))}
        for (let i = 1;i <= 4; i++) {MoveLC.push(loadImage(`Game Files/Sprites/Characters/Brown Man/Brown Man Running Backwards/brown b${i}.png`))}
        
        var jumpLC = loadImage('Game Files/Sprites/Characters/Brown Man/Brown Man Jumping/bro jumping left.png')
        var jumpRC = loadImage('Game Files/Sprites/Characters/Brown Man/Brown Man Jumping/bro jumping right.png')
      }
      else if(char === 4){
        var MoveLC = []
        var MoveRC = []

        var idleC = loadImage('Game Files/Sprites/Characters/Dark Skin Man/Dark Skin Man Running Forward/DS f2.png')
        for (let i = 1;i <= 4; i++) {MoveRC.push(loadImage(`Game Files/Sprites/Characters/Dark Skin Man/Dark Skin Man Running Forward/DS f${i}.png`))}
        for (let i = 1;i <= 4; i++) {MoveLC.push(loadImage(`Game Files/Sprites/Characters/Dark Skin Man/Dark Skin Man Running Backwards/DS b${i}.png`))}
        
        var jumpLC = loadImage('Game Files/Sprites/Characters/Dark Skin Man/Dark Skin Man Jumping/DS jump L.png')
        var jumpRC = loadImage('Game Files/Sprites/Characters/Dark Skin Man/Dark Skin Man Jumping/DS jump R.png')
      }
      else{
        char = 1
      }

      this.idle = idleC;
      this.change = idleC;
        
      this.moveRightFrames = MoveRC;
      this.moveLeftFrames = MoveLC;
      this.jumpLeftImage = jumpLC;
      this.jumpRightImage = jumpRC;
     
    }
    frame(){
        if (millis() - this.lastFrameTime > this.frameDuration) {
            this.currentFrame = (this.currentFrame + 1) % 4
            this.lastFrameTime = millis() 
          }
            
          return this.currentFrame
           }

    colliding(body){
        return(
            Matter.SAT.collides(this.body,body.body).collided
            //Matter.SAT.colldies(this.body,this.platforms.forEach(element => {element.body}))
        )
    }

    updateMovement(body,left,right,jump){
    
        if (this.colliding(body)&&!this.dead) {
          let currentVelocityX = this.body.velocity.x;
          if (keys[jump]) {
            let horizontalDirection = 0;
            this.change = this.jumpRightImage;
    
            if (keys[left]) {
              horizontalDirection = -1;
              this.change = this.jumpLeftImage;
            } else if (keys[right]) {
              horizontalDirection = 1;
              this.change = this.jumpRightImage;
            }
    
            Matter.Body.setVelocity(this.body, { x: currentVelocityX + horizontalDirection, y: -15 });
          }
      
          if (!keys[jump]) {
            if (keys[left]) {
              Matter.Body.setVelocity(this.body, { x: -5, y: 0 });
              this.change = this.moveLeftFrames[this.frame()];
            } else if (keys[right]) {
              Matter.Body.setVelocity(this.body, { x: 5, y: 0 });
              this.change = this.moveRightFrames[this.frame()];
            } else {
              Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
              this.change = this.idle;
            }
  
        }
    }
}
    

    display(){
        push()
        imageMode(CENTER);
        image(this.change, this.body.position.x, this.body.position.y - 9);
        pop(); 
    }

    getPlayerPos(){
      return(this.body.position.x)
    }
    dying(x, y, dead, func) {
      this.death = [];
      for (let i = 1; i <= 2; i++) {
        this.death.push(loadImage(`Game Files/Sprites/Player Dying/dying f${i}.png`));
      }
      this.death.push(loadImage('Games Files/Sprites/Player Dying/dying f6.png'))

    let currentFrame = 0;

      if (dead) {
        Matter.Body.setPosition(this.body,{x:width/2,y:height/2})
        Matter.Body.setStatic(this.body,true)
        this.dead = true;
        
        this.interval = setInterval(() => {
          this.change = this.death[currentFrame];
          console.log(currentFrame)

          if (currentFrame === 2) {
            clearInterval(this.interval)
            this.change = this.idle
            Matter.Body.setStatic(this.body,false)
            this.respawn(x, y);
            this.dead = false;
            if (typeof func === 'function') {
              func();
            }
            
          }
          else{
          currentFrame += 1
          }
        }, 500);

      }
    }
      
    respawn(x,y){
      Matter.Body.setPosition(this.body,{x:x,y:y})
      Matter.Body.setVelocity(this.body,{x:0,y:0})

      this.change = this.idle
      //Matter.Body.setStatic(this.body,false)
      }
    isDead(){
      return this.dead
    }
    isFullyDead(lives){
    if(lives === 0){
    this.change = this.death[2]
    //Matter.Body.setStatic(this.body,true)
    }
}
}