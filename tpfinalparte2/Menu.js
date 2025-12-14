let sonidoJuego, sonidoGolpe, sonidoGanaste;  
let menu;


class Menu {
  constructor() { 
    this.botonJugar = createButton('Jugar');
    this.botonCreditos = createButton('Créditos');
    this.botonInstrucciones = createButton('Instrucciones');
    this.botonJugar.position(width / 2 - 50, height / 2 - 40);
    this.botonCreditos.position(width / 2 - 50, height / 2);
    this.botonInstrucciones.position(width / 2 - 50, height / 2 + 40);
    this.imagenmenu = loadImage('data/menu.jpg');
   
   
    this.botonJugar.size(100, 40);
    this.botonCreditos.size(100, 40);
    this.botonInstrucciones.size(100, 40);

    this.botonJugar.mousePressed(() => this.iniciarJuego());
    this.botonCreditos.mousePressed(() => this.mostrarCreditos());
    this.botonInstrucciones.mousePressed(() => this.mostrarInstrucciones());


    this.botonVolver = createButton('Volver al Menú');
    this.botonVolver.position(width / 2 - 50, height / 2 + 100);
    this.botonVolver.size(100, 40);
    this.botonVolver.mousePressed(() => this.volverAlMenu());
    this.botonVolver.hide(); 

    this.mostrandoCreditos = false;
    this.mostrandoInstrucciones = false;

    sonidoJuego = loadSound('data/SONIDAZO.mp3');
    sonidoGolpe = loadSound('data/PERDISTE.mp3');
    sonidoGanaste = loadSound('data/GANASTE.mp3');

    sonidoJuego.setVolume(0.1);  
    sonidoGolpe.setVolume(0.1);
    sonidoGanaste.setVolume(0.1);
  }

  mostrar() {
    background(this.imagenmenu);
    if (this.mostrandoCreditos) {
      this.dibujarCreditos();
    } else if (this.mostrandoInstrucciones) {
      this.dibujarInstrucciones();
    } else {
      // Vista principal del menú
      fill(255);
      stroke(255, 165, 0);
      strokeWeight(2);
      textSize(40); 
      textAlign(CENTER, CENTER);
      text("EL ESCAPE DEL CAOS", width / 2, height / 2 - 100); 

      this.botonJugar.show();
      this.botonCreditos.show();
      this.botonInstrucciones.show();
      this.botonVolver.hide(); // Aseguramos que el Volver esté oculto en el menú principal
    }
  }

  ocultar() {
    this.botonJugar.hide();
    this.botonCreditos.hide();
    this.botonInstrucciones.hide();
  }
  
  dibujarCreditos() {
    this.ocultar(); 
    fill(255, 255, 255);  
    textSize(25); 
    textAlign(CENTER, CENTER);
    text("Creadores: Luciano Aversa y Valeria Rocchio", width / 2, height / 2 - 50);
    this.botonVolver.show();
  }

  dibujarInstrucciones() {
    this.ocultar();  
    fill(255, 255, 255); 
    textSize(25);
    textAlign(CENTER, TOP);
    text("Movete con las flechas del teclado, \nesquivá los portales y \nllegá a la meta púrpura para escapar! \n(Los portales aumentan su velocidad por nivel)", width / 2, height / 2 - 100); 
    this.botonVolver.show();
  }

  iniciarJuego() {
    if (!sonidoJuego.isPlaying()) {
      sonidoJuego.play(); 
    }
    this.ocultar();
    juego = new Juego();  
  }
  
  mostrarCreditos() {
    this.mostrandoCreditos = true; 
  }

  mostrarInstrucciones() {
    this.mostrandoInstrucciones = true; 
  }

  volverAlMenu() {
    this.botonVolver.hide();
    this.mostrandoCreditos = false; 
    this.mostrandoInstrucciones = false;
  }
}
