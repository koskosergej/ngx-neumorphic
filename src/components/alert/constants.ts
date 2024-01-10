import { InjectionToken } from '@angular/core';
import { AlertConfig } from './types';

export const DEFAULT_ALERTS_CONFIG = {
  timeout: 3000
};

export const ALERTS_CONFIG =
  new InjectionToken<AlertConfig>('Alerts configuration');
