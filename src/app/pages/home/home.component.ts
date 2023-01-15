import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  destruido: boolean = true;

  valorAtual: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  destruirComponent() {
    this.destruido = false;
  }

  alertaInfo(event: KeyboardEvent){
    console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  onMudouValor(event: any) {
    console.log(event);
    console.log(event.novoValor);

  }
}
