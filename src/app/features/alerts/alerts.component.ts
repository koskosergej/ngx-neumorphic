import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent, AlertService, AlertType } from '@ngx-neoumorphic/alert';
import { NeoButton } from '@ngx-neoumorphic/button';
import { NeoInput } from '@ngx-neoumorphic/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'neo-alerts',
  standalone: true,
  imports: [AlertComponent, NeoButton, NeoInput, ReactiveFormsModule],
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
