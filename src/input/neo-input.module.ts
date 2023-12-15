import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeoInput } from './input';


@NgModule({
  imports: [
    CommonModule,
    NeoInput
  ],
  exports: [NeoInput]
})
export class NeoInputModule {
}
