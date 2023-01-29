/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 700
const explosions  = []
let canvasPosition = canvas.getBoundingClientRect()

// ctx.fillStyle = 'white'
// ctx.fillText("dsdsd",3,3)
// ctx.fillRect(50,50,30,43)


class Explosion{
    constructor(x,y){
        this.spriteWidht = 200
        this.spriteHight = 179
        this.width = this.spriteWidht/2
        this.height = this.spriteHight/2
        this.x =x
        this.y = y
        this.image = new Image()
        this.image.src = 'boom.png'
        this.frame = 0
        this.timer = 0
        this.angle = Math.random() * 6.2
   
    }
    update(){
        this.timer++
        if(this.timer % 10 === 0){
        this.frame++
        }
    }
    draw(){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(this.angle)
        ctx.drawImage(this.image,this.spriteWidht*this.frame,0,this.spriteWidht,this.spriteHight,0-this.width/2,0-this.height/2,this.width,this.height)
        ctx.restore()
    }
}


canvas.addEventListener('mousemove',function(e){
    let positionX=e.offsetX
    let positionY=e.offsetY
    //console.log(e)
    //console.log(canvasPosition)
    // ctx.fillStyle = 'red'
    // ctx.fillRect(e.x-canvasPosition.left-25,e.y-canvasPosition.top-25,50,50)
    explosions.push(new Explosion(positionX,positionY))
   
})

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i=0;i<explosions.length;i++){
        explosions[i].update()
        explosions[i].draw()
        if(explosions[i].frame > 5){
            explosions.splice(i,1)
            
        }
        //console.log(explosions.length)
    }
   
    requestAnimationFrame(animate)
}
animate()