import { Component, EventEmitter, Output } from '@angular/core';
import { NeoCardBodyDirective, NeoCardComponent, NeoCardFooterDirective } from '@ngx-neoumorphic/card';
import { NeoInput } from '@ngx-neoumorphic/input';
import { NeoButton } from '@ngx-neoumorphic/button';
import { LoginData } from './type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'neo-login-page',
  standalone: true,
  imports: [NeoCardComponent, NeoInput, NeoCardBodyDirective, NeoCardFooterDirective, NeoButton, ReactiveFormsModule],
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
