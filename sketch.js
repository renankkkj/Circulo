let Cor;
let PosicaoHorizontal;
let PosicaoVertical;


function setup() {
  createCanvas(800, 800);
  background(255);
  Cor = color (random (0, 255), random (0, 255), random (0, 255));
  PosicaoHorizontal = 400
  PosicaoVertical = 400
}

function draw() {
  
  stroke(0, 0, 0);
  fill(Cor);
  
  circle(PosicaoHorizontal, PosicaoVertical, 25, 25);
  
  if (mouseIsPressed) {
    Cor = color (random (0, 255), random (0, 255), random (0, 255));
  }
  
  
  if (mouseX < PosicaoHorizontal) {
    PosicaoHorizontal = PosicaoHorizontal -1
  }
  if (mouseX > PosicaoHorizontal) {
    PosicaoHorizontal = PosicaoHorizontal +1
  }
  
  
  
  if (mouseY < PosicaoVertical) {
    PosicaoVertical = PosicaoVertical -1
  }
  if (mouseY > PosicaoVertical) {
    PosicaoVertical = PosicaoVertical +1
  }
}