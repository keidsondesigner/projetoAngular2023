import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  showBalance: boolean = false;

  iconOn: string = 'assets/icons/eye-on.svg';

  iconOff: string = 'assets/icons/eye-off.svg';

  constructor() { }

  ngOnInit(): void {
  }

  handleToggleVisibleBalance() {
    this.showBalance = !this.showBalance;
  }
}
