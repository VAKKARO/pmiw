function rectanguloDegrade (x_, y_, ancho_, alto_, c1_, c2_) {
  for (let p = 0; p < ancho_; p++) {
    // Interpolación de color
    let c = lerpColor(c1_, c2_, p / ancho_);
    // Cambiar el color del trazo basado en la interacc2ion del mouse
    if (mouseIsPressed) {
      let c3 = map(mouseX, 0, width, 0, 255);
      let c4 = map(mouseY, 0, height, 255, 0);
      stroke(c3, c4);
    } else {
      stroke(c);
    }
    
    // Dibujar la línea
    line(x_ - ancho_ / 2 + p, y_ - alto_ / 2, x_ - ancho_ / 2 + p, y_ + alto_ / 2);
  }
}
