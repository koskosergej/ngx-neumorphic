import { Component } from '@angular/core';
import { LoginData, LoginPageComponent } from '@ngx-ks/login-page';
import { JsonPipe } from '@angular/common';
import { KsDividerComponent } from '@ngx-ks/divider';

@Component({
  selector: 'ks-common-pages',
  standalone: true,
  imports: [LoginPageComponent, JsonPipe, KsDividerComponent],
  templateUrl: './common-pages.component.html',
  styleUrl: './common-pages.component.scss'
})
export class CommonPagesComponent {
  loginData: Partial<LoginData> = {};

  loginPageSubmit(data: Partial<LoginData>): void {
    this.loginData = data;
  }
}
