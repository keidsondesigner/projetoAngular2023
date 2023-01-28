import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @Output() dadosEnviado = new EventEmitter();

  lista: any[] = [
    { nome: 'Keidson', idade: 29},
    { nome: 'Karol', idade: 22},
    { nome: 'Arthur', idade: 6}
  ];


  constructor() { }

  ngOnInit(): void {
  }

  incrementar(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementar(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  getDados(event: number){
    this.dadosEnviado.emit(this.lista[event]);
    console.log('Dados enviado', this.lista[event])
  }

}
