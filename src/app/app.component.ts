import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { MultiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';
import { DistanciaComponent } from './formularios/distancia/distancia.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent],
  //imports: [RouterOutlet, MultiplicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
}
