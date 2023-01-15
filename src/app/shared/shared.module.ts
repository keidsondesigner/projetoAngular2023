import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './components/hello/hello.component';
import { OutputComponent } from './components/output/output.component';

@NgModule({
  declarations: [
    HelloComponent,
    OutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent,
    OutputComponent
  ]
})
export class SharedModule { }
