//https://www.youtube.com/watch?v=Q5pucIjqcjA

function setup() {
  createCanvas(640, 480);
  menu = new Menu(); 
}

function draw() {
  if (!juego) {
    menu.mostrar();  
  } else {
    juego.actualizar(); 
    juego.mostrar();
  }
}
