class Spikes extends Platform{
    constructor(x,y,w,h){
        super(x,y,w,h)
        this.dead = false
    }
    display(){
        super.display()
    }
    damage(body,off,func){
        if(typeof func === 'function'){
            if(Matter.SAT.collides(body.body,this.body).collided === true){
                Matter.Body.setVelocity(body.body,{x:0,y:0})
                this.dead = true
                func()
            }
            if(!off){
                this.dead = false
            }
        }
        
    }
    isDead(){
       return this.dead
    }
}

class Complete extends Platform{
    constructor(x,y,w,h){
        super(x,y,w,h)
        this.finish = false
    }
    display(){
        fill("black")
        super.display()
    }
    complete(body,func){
        if(typeof func === 'function'){
            if(Matter.SAT.collides(body.body,this.body).collided === true){
                Matter.Body.setVelocity(body.body,{x:0,y:0})
                this.finish = true
                func()
            }}
    }
    isComplete(){
        return this.finish
    }
}