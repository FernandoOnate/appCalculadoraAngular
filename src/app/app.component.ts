import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloApp = 'Aplicación de calculadora';
  operandoA:number;
  operandoB:number;
  
  resultado = 0;
  sumarElementos(): void {
    this.resultado = this.operandoA + this.operandoB;
  }
}
