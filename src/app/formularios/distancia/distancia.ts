export class Distancia {
  public x1:number=0;
  y1:number=0;
  x2:number=0;
  y2:number=0;
  resultado:number=0;

  calcularD(): number {
    let dx = this.x2 - this.x1;
    let dy = this.y2 - this.y1;
    this.resultado = Math.sqrt(dx * dx + dy * dy);
    return (this.resultado);
  }
}
