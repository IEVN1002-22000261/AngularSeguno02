import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { initFlowbite } from 'flowbite';
//import { HoroscoposComponent } from './formularios/horoscopos/horoscopos.component';
//import { MultiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';
//import { DistanciaComponent } from './formularios/distancia/distancia.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  //imports: [RouterOutlet, HoroscoposComponent],
  //imports: [RouterOutlet, DistanciaComponent],
  //imports: [RouterOutlet, MultiplicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
  ngOnInit(): void {
    initFlowbite();
  }
}
