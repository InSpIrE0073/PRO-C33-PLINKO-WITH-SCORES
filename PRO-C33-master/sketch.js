var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var particle;
var count=0;
var divisions = [];
var gameState="Start"
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",15,550);
  text("500",100,550);
  text("500",185,550);
  text("500",270,550);

  text("100",345,550);
  text("100",430,550);
  text("100",505,550);

  text("200",590,550);
  text("200",665,550);
  text("200",740,550);

  
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  if(particle!==null){
    particle.display();
    if(particle.body.position.y>500){
      if(particle.body.position.x<300){
      score= score+500
      particle= null
      }
      else if(particle.body.position.x>300 & particle.body.position.x<550){
        score= score+100
        particle= null
      }
      else if(particle.body.position.x>560){
        score= score+100
        particle= null
      }
    }
  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(gameState!=="end")
  {
particle= new Particle(mouseX,10,10,10)
count= count+1
if(count>5){
  gameState="end"
}
  }
}