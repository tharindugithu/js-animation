/**@type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
CANVAS_WIDTH = canvas.width = 500
CANVAS_HEIGHT = canvas.height = 1000
const numberOfEnemies =300
const enemiesArray = []

let gameFrame = 0
//  enemy1 = {
//     x:0,
//     y:0,
//     width:200,
//     height:200
// }




//////////////////////////enemy3/////////////////////

class Enemy{
    constructor(){
        this.spriteWidth = 218//1 action width in png
        this.spriteHeight = 177
        this.width=this.spriteWidth/2.5
        this.height=this.spriteHeight/2.5
        this.enemyImage = new Image()
        this.enemyImage.src = 'enemy3.png'        
       // this.speed = Math.random()*4 - 2//genarate random number between -2 and +2
        this.speed = Math.random()*4 + 1
        
        this.x=20//Math.random()*(canvas.width-this.width)
        this.y=10//Math.random()*(canvas.height-this.height)
        this.frame=0
        this.flapSpeed = Math.floor(Math.random()* 3 + 1)
        this.angel = 0
        this.angelSpeed = Math.random()*2 + 0.5
        this.curve = Math.random() * 200 + 50
    }
    update(){
        // this.x += Math.random() * 5 -2.5
        // this.y +=  Math.random() * 5 -2.5
        // this.x = canvas.width/2*Math.sin(this.angel*0.02) +(canvas.width/2-this.width/2)
        // this.y = canvas.height/2*Math.cos(this.angel*0.02) +(canvas.height/2-this.height/2)
        //console.log(this.x)
        //this.y += this.curve * Math.sin(this.angel)
        this.angel += this.angelSpeed
        if(this.x+this.width < 0) this.x = canvas.width
        if(gameFrame % this.flapSpeed === 0){
        this.frame > 4 ? this.frame =0 : this.frame++
        }
 
    }
    draw(){        
       // ctx.strokeRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(this.enemyImage,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}

//const enemy1= new Enemy()

for(let i=0;i<numberOfEnemies;i++){
   enemiesArray.push(new Enemy())
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    enemiesArray.forEach(enemy=>{
        enemy.update()
        enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
}
animate()





///////////////////////////enemy2///////////////////////
// class Enemy{
//     constructor(){
//         this.enemyImage = new Image()
//         this.enemyImage.src = 'enemy2.png'        
//        // this.speed = Math.random()*4 - 2//genarate random number between -2 and +2
//         this.speed = Math.random()*4 + 1
//         this.spriteWidth = 266//1 action width in png
//         this.spriteHeight = 188
//         this.width=this.spriteWidth/2.5
//         this.height=this.spriteHeight/2.5
//         this.x=Math.random()*(canvas.width-this.width)
//         this.y=Math.random()*(canvas.height-this.height)
//         this.frame=0
//         this.flapSpeed = Math.floor(Math.random()* 3 + 1)
//         this.angel = 0
//         this.angelSpeed = Math.random()*0.2
//         this.curve = Math.random() * 7
//     }
//     update(){
//         // this.x += Math.random() * 5 -2.5
//         // this.y +=  Math.random() * 5 -2.5
//         this.x -= this.speed
//         this.y += this.curve * Math.sin(this.angel)
//         this.angel += this.angelSpeed
//         if(this.x+this.width < 0) this.x = canvas.width
//         if(gameFrame % this.flapSpeed === 0){
//         this.frame > 4 ? this.frame =0 : this.frame++
//         }
//     }
//     draw(){        
//        // ctx.strokeRect(this.x,this.y,this.width,this.height)
//         ctx.drawImage(this.enemyImage,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
//     }
// }

// //const enemy1= new Enemy()

// for(let i=0;i<numberOfEnemies;i++){
//    enemiesArray.push(new Enemy())
// }

// function animate(){
//     ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
//     enemiesArray.forEach(enemy=>{
//         enemy.update()
//         enemy.draw()
//     })
//     gameFrame++
//     requestAnimationFrame(animate)
// }
// animate()

/////////////////////////////enemy1/////////////////////////////////
// class Enemy{
//     constructor(){
//         this.enemyImage = new Image()
//         this.enemyImage.src = 'enemy1.png'        
        
//         this.speed = Math.random()*4 - 2//genarate random number between -2 and +2
//         this.spriteWidth = 293//1 action width in png
//         this.spriteHeight = 155
//         this.width=this.spriteWidth/2.5
//         this.height=this.spriteHeight/2.5
//         this.x=Math.random()*(canvas.width-this.width)
//         this.y=Math.random()*(canvas.height-this.height)
//         this.frame=0
//         this.flapSpeed = Math.floor(Math.random()* 3 + 1)
//     }
//     update(){
//         this.x += Math.random() * 5 -2.5
//         this.y +=  Math.random() * 5 -2.5
//         if(gameFrame % this.flapSpeed === 0){
//         this.frame > 4 ? this.frame =0 : this.frame++
//         }
//     }
//     draw(){        
//        // ctx.strokeRect(this.x,this.y,this.width,this.height)
//         ctx.drawImage(this.enemyImage,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
//     }
// }

// //const enemy1= new Enemy()

// for(let i=0;i<numberOfEnemies;i++){
//    enemiesArray.push(new Enemy())
// }

// function animate(){
//     ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
//     enemiesArray.forEach(enemy=>{
//         enemy.update()
//         enemy.draw()
//     })
//     gameFrame++
//     requestAnimationFrame(animate)
// }
// animate()