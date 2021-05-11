var ground, groundImage
function preload(){
  groundImage = loadImage("images/ground.png")
}
function setup(){
  createCanvas(displayWidth,displayHeight)

}
function draw(){
  background(255)
  spawnground()
  drawSprites()
}
function spawnground(){
  if(frameCount%400===0){
ground = createSprite(0,displayHeight-50,200,20)

ground.velocityX = 4
ground.addImage(groundImage)
ground.scale = 0.2
  }
}