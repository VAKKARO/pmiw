// ALumna: Rocchio Valeria Karina 
// Comision: 2
// Legajo: 119127/8
// Link al video explicativo: https://www.youtube.com/watch?v=uBC5vL9CUU8
let miFoto;

function preload (){
 miFoto=loadImage("data/opelegida.png");
}

function setup() {
createCanvas (800,400);
}


function draw() {
image (miFoto, 0,0,400,400);
translate(420,20);
GrillaCuadrados();
}

function mouseMoved (){
  print (mouseX); 
  print (mouseY);
}
  
