import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ALERTS_CONFIG } from '@ngx-ks/alert';

export const routes: Routes = [
  {
    path: 'inputs',
    loadComponent: () =>
      import('./features/inputs/inputs.component').then(
        (m) => m.InputsComponent
      )
  },
  {
    path: 'buttons',
    loadComponent: () =>
      import('./features/buttons/buttons.component').then(
        (m) => m.ButtonsComponent
      )
  },
  {
    path: 'alerts',
    loadComponent: () =>
      import('./features/alerts/alerts.component').then(
        (m) => m.AlertsComponent
      )
  },
  {
    path: 'layout',
    loadComponent: () =>
      import('./features/layout/layout.component').then(
        (m) => m.LayoutComponent
      )
  },
  {
    path: 'indicators',
    loadComponent: () =>
      import(
        './features/indicators/indicators.component'
      ).then((m) => m.IndicatorsComponent)
  },
  {
    path: 'common-pages',
    loadComponent: () =>
      import(
        './features/common-pages/common-pages.component'
      ).then((m) => m.CommonPagesComponent)
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('./features/pipes/pipes.component').then(
        (m) => m.PipesComponent
      )
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: ALERTS_CONFIG, useValue: { timeout: 1000 } }
  ]
};
