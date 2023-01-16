import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  iconToggle: boolean = false;

  iconOn: string = 'assets/icons/eye-on.svg';

  iconOff: string = 'assets/icons/eye-off.svg';

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.iconToggle = !this.iconToggle;
  }
}
