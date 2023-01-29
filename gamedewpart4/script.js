const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let timeToNextRaven = 0
let ravenInterval = 500
let lastTime = 0

let ravens = []
class Raven{
    constructor(){
        // this.width =100
        // this.height = 50
        this.spriteWidth = 271
        this.spriteHight = 194
        this.sizeModifier = Math.random()* 0.6 + 0.4
        this.width =this.spriteWidth*this.sizeModifier
        this.height = this.spriteHight*this.sizeModifier
        this.x = canvas.width
        this.y = Math.random()*(canvas.height-this.height)
        this.derectionX  = Math.random()*5 + 3
        this.derectionY = Math.random()*5 - 2.5
        this.markForDeletion = false
        this.image = new Image()
        this.image.src = 'raven.png'
        this.frame = 0
        this.maxFrame = 4
        this.timeSinceFlap = 0
        this.flapInterval =Math.random()*100 + 100

    }
    update(deltaTime){
        if(this.y <0 || this.y> canvas.height - this.height){
            this.derectionY  *= -1
        }
        this.x -= this.derectionX
        this.y -= this.derectionY
        if(this.x+this.width< 0){
            this.markForDeletion =true
        }
        this.timeSinceFlap += deltaTime
        if(this.timeSinceFlap>this.flapInterval){
            if(this.frame>this.maxFrame) this.frame =0
            else this.frame++

            this.timeSinceFlap = 0
        }
        
    }
    draw(){
        //ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHight,this.x,this.y,this.width,this.height) 
    }
}
const raven = new Raven()
function animate(timestamp){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    let deltaTime = timestamp-lastTime
    lastTime =timestamp
    timeToNextRaven += deltaTime
    if(timeToNextRaven > ravenInterval){
        ravens.push(new Raven())
        timeToNextRaven = 0
    }
    [...ravens].forEach(obj=>{obj.update(deltaTime)});
    [...ravens].forEach(obj=>{obj.draw()})
    ravens= ravens.filter(obj => !obj.markForDeletion)
    // ravens.forEach(obj=>{
    //     obj.update()
    //     obj.draw()
    // })
    //console.log(deltaTime)
    requestAnimationFrame(animate)
}
animate(0 )