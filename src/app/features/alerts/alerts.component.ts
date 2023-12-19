import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent, AlertService, AlertType } from '@ngx-ks/alert';
import { KsButton } from '@ngx-ks/button';
import { KsInput } from '@ngx-ks/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ks-alerts',
  standalone: true,
  imports: [AlertComponent, KsButton, KsInput, ReactiveFormsModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertsComponent {
  messageCntr = new FormControl('');

  constructor(private alertService: AlertService) {}

  showAlert(alertType: AlertType): void {
    this.alertService[alertType](this.messageCntr.value ?? '');
  }
}
