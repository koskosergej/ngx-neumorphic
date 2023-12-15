import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeoButton } from './button';


@NgModule({
  imports: [
    CommonModule,
    NeoButton
  ],
  exports: [NeoButton]
})
export class NeoButtonModule {
}
