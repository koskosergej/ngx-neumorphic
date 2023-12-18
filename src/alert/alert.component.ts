import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { Alert, Alerts } from './types';
import { AlertService } from './alert.service';

@Component({
  selector: 'neo-alert',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {
  alerts$!: Observable<Alerts>;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alerts$ = this.alertService.alerts$;
  }

  trackByFn(i: number, notice: Alert) {
    return notice.id;
  }
}
