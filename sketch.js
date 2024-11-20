var fondo

function preload () {
  fondo = loadImage ("psicodelico.gif");
}


let bugs = [];


function setup() {
  createCanvas(500, 500);
  background(220);
  
  image (fondo);
  
  for(i = 0; i < 1000; i++) {
    bugs [i] = new JitterBug(width/2 -15, height/2 -25, random(1,20));
  }
  
  
  //persona
 
  push();
  fill (0);
  //cabeza
  ellipse (width/2, height/2, 200);
  //pera
  triangle (width/2, height/2 + 100, width/2 + 100, height/2, width/2 + 100, height/2 + 140);
  //nariz
  triangle (width/2 + 100, height/2 +5, width/2 +120, height/2 +60, width/2 +100, height/2 +70);
  //cuello
  quad (width/2 -50, height/2 +70, width/2 +40, height/2 +100, width/2 +20, height/2 +200, width/2 -80, height/2 +200);
  //torso
  ellipse (width/2 -15, height/2 +270, 230)
  pop();
  

}

function draw() {
  for(bug of bugs){
    bug.mostrar();
    bug.mover();
  }  
  
}

function JitterBug(tempX, tempY, tempDiametro) {
  this.x = tempX;
  this.y = tempY;
  this.diametro = tempDiametro;
  this.velocidad = 2;
  this.mover = function () {
    this.x += random (-this.velocidad, this.velocidad);
    this.y += random (-this.velocidad, this.velocidad);
  };
  
  let letras = ['A','a','B','b','C','c','D','d','Q','q','W','w','E','e','R','r','T','t','Y','y','U','u','I','i','O','o','P','p','S','s','F','f','G','g','H','h','J','j','K','k','L','l','Ñ','ñ','Z','z','X','x','V','v','N','n','M','m'];
  
  let letrear = random(letras);
  var opasidad = 0.0;
  
  this.mostrar = function () {
    
    
    noStroke();
    //stroke(random(0, 255));
    fill(random(0,150),random(0,150),random(0,150), opasidad);
    textSize(random[3,5,10,50]);
    text (letrear,this.x, this.y);
    opasidad += 0.35;
  };
}