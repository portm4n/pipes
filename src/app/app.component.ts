import { Component } from '@angular/core';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitan América';
  personajes: string[] = ['Ironman', 'Spiderman' , 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;
  heroe = { 
    nombre: 'Logan',
    clave : 'Wolverine',
    edad : 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
