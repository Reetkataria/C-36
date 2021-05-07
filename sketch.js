var canvas,backgroundImage,playerCount,database,form,player,game;
var gameState=0;


function setup(){
  canvas=createcanvas(400,400)
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start()
  
}
function draw(){
  background("white");
  


  
}