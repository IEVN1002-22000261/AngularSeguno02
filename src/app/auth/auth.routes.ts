import { Routes } from '@angular/router';

export default[
  {
    path:'distancia',
    loadComponent:()=>import('../formularios/distancia/distancia.component')
  },
  {
    path:'multiplicacion',
    loadComponent:()=>import('../formularios/multiplicacion/multiplicacion.component')
  },
  {
    path:'horoscopos',
    loadComponent:()=>import('../formularios/horoscopos/horoscopos.component')
  }
]
