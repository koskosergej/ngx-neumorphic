import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ALERTS_CONFIG } from '@ngx-ks/alert';

export const routes: Routes = [
  {
    path: 'inputs',
    loadComponent: () => import('./features/inputs/inputs.component').then((m) => m.InputsComponent)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./features/buttons/buttons.component').then((m) => m.ButtonsComponent)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./features/alerts/alerts.component').then((m) => m.AlertsComponent)
  },
  {
    path: 'cards',
    loadComponent: () => import('./features/cards/cards.component').then((m) => m.CardsComponent)
  },
  {
    path: 'common-pages',
    loadComponent: () => import('./features/common-pages/common-pages.component').then((m) => m.CommonPagesComponent)
  },
  {
    path: 'pipes',
    loadComponent: () => import('./features/pipes/pipes.component').then((m) => m.PipesComponent)
  }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: ALERTS_CONFIG, useValue: { timeout: 1000 } }]
};
