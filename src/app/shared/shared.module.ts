import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent
  ]
})
export class SharedModule { }
