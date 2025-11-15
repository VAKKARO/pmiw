// Comision: 2
// Alumnos: Rocchio Valeria Karina - Luciano Aversa 
// Link al video explicativo: https://youtu.be/Q5pucIjqcjA
let juego;


function setup() {
  createCanvas(640, 480);  
  juego = new Juego(); 
}

function draw() {
  background(0);  
  juego.actualizar();  
  juego.mostrar();  
}
