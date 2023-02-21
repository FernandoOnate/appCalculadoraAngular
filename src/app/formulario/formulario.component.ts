import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
   operandoA:number;
   operandoB:number;

  @Output() operandos = new EventEmitter<number[]>();

  enviarElementos():void{
    this.operandos.emit([this.operandoA,this.operandoB]);
  }
}
