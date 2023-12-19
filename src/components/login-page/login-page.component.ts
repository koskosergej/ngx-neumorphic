import { Component, EventEmitter, Output } from '@angular/core';
import { KsCardBodyDirective, KsCardComponent, KsCardFooterDirective } from '@ngx-ks/card';
import { KsInput } from '@ngx-ks/input';
import { KsButton } from '@ngx-ks/button';
import { LoginData } from './type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorDirective } from '@ngx-ks/error';
import { FormFieldComponent } from '../form-field/form-field.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ks-login-page',
  standalone: true,
  imports: [
    KsCardComponent,
    KsInput,
    KsButton,
    ReactiveFormsModule,
    ErrorDirective,
    FormFieldComponent,
    KsCardBodyDirective,
    KsCardFooterDirective,
    NgIf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  @Output() submit = new EventEmitter<Partial<LoginData>>();

  form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  onSubmit(): void {
    this.submit.emit(this.form.value);
  }
}
