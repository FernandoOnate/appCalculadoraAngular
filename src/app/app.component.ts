import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloApp = 'Aplicación de calculadora';

  resultado: number;

  sumar(operandos: number[]) {
    this.resultado = operandos[0] + operandos[1];
  }
}
