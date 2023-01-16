import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './components/hello/hello.component';
import { OutputComponent } from './components/output/output.component';
import { DiretivasAtributosComponent } from './components/diretivas-atributos/diretivas-atributos.component';

@NgModule({
  declarations: [
    HelloComponent,
    OutputComponent,
    DiretivasAtributosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent,
    OutputComponent,
    DiretivasAtributosComponent
  ]
})
export class SharedModule { }
