import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloApp = 'Aplicación de calculadora';
  operandoA = 0;
  operandoB = 0;
  
  resultado = 0;
  sumarElementos(): void {
    this.resultado = this.operandoA + this.operandoB;
  }
}
