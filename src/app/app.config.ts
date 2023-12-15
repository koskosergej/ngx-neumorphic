import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inputs',
    loadComponent: () => import('./features/inputs/inputs.component').then(m => m.InputsComponent)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./features/buttons/buttons.component').then(m => m.ButtonsComponent)
  }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
