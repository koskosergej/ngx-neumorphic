import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alert, Alerts } from './types';
import { generateID } from './utils';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertsMap: Record<string, Alert> = {};

  private _alerts$ = new BehaviorSubject<Alerts>([]);
  public alerts$ = this._alerts$.asObservable();

  emitMessage(alert: Omit<Alert, 'id'>): void {
    const tempAlert = { ...alert, id: generateID() };
    tempAlert.timestamp = +new Date();
    tempAlert.timeOutID = setTimeout(this.destroy.bind(this, tempAlert.id), 3000);

    this.alertsMap[tempAlert.id] = tempAlert;

    this._alerts$.next([{ ...tempAlert }, ...this._alerts$.value]);
  }

  success(message: string): void {
    this.emitMessage({ type: 'success', message });
  }

  warning(message: string): void {
    this.emitMessage({ type: 'warning', message });
  }

  info(message: string): void {
    this.emitMessage({ type: 'info', message });
  }

  destroy(id: string) {
    if (!this.alertsMap.hasOwnProperty(id)) return;

    this.alertsMap[id].timeOutID &&
    clearTimeout(this.alertsMap[id].timeOutID);

    delete this.alertsMap[id];

    this._alerts$.next([...this._alerts$.value.filter(item => item.id !== id)]);
  }

}
