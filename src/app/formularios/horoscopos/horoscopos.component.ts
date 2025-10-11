import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoroscopoChino } from './horoscopos';

@Component({
  selector: 'app-horoscopos',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './horoscopos.component.html',
  styleUrl: './horoscopos.component.css'
})
export class HoroscoposComponent {
  formulario!: FormGroup;
  edad!: number;
  signo!: string;
  imagen!: string;
  objHoro = new HoroscopoChino();
  mostrarResultado: boolean = false;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apat: new FormControl(''),
      amat: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  calcular(): void {
    this.objHoro.nombre = this.formulario.value.nombre;
    this.objHoro.apat = this.formulario.value.apat;
    this.objHoro.amat = this.formulario.value.amat;
    this.objHoro.dia = this.formulario.value.dia;
    this.objHoro.mes = this.formulario.value.mes;
    this.objHoro.anio = this.formulario.value.anio;
    this.objHoro.sexo = this.formulario.value.sexo;

    this.objHoro.calcularEdad();
    this.objHoro.obtenerSigno();

    this.edad = this.objHoro.edad;
    this.signo = this.objHoro.signo;
    this.imagen = this.objHoro.imagen;

    this.mostrarResultado = true;
  }
}
