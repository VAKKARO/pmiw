//Alumna: Rocchio Valeria Karina 121
//Comision 3 
//DNI: 41609904
//Legajo: 119127/8
//Link al video explicativo: https://youtu.be/AGwvNj0i_Mg
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
   
