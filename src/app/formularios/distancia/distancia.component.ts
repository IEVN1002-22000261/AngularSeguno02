import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './distancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {

  formulario!: FormGroup;
  resultado!: number;
  objMult = new Distancia();

  constructor(){}
  ngOnInit():void{
    this.formulario=new FormGroup({
      x1:new FormControl(''),
      y1:new FormControl(''),
      x2:new FormControl(''),
      y2:new FormControl('')
    });
  }

calcularDistancia(): void {
    this.objMult.x1 = this.formulario.value.x1;
    this.objMult.y1 = this.formulario.value.y1;
    this.objMult.x2 = this.formulario.value.x2;
    this.objMult.y2 = this.formulario.value.y2;

    this.objMult.calcularD();

    this.resultado = this.objMult.resultado;
  }
}
