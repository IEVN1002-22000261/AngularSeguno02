import { Routes } from '@angular/router';

export default[
  {
    path:'distancia',
    loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
  },
  {
    path:'multiplicacion',
    loadComponent:()=>import('./multiplicacion/multiplicacion.component').then(c=>c.MultiplicacionComponent)
  },
  {
    path:'horoscopos',
    loadComponent:()=>import('./horoscopos/horoscopos.component').then(c=>c.HoroscoposComponent)
  }
]
