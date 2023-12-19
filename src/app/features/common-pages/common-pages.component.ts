import { Component } from '@angular/core';
import { LoginData, LoginPageComponent } from '@ngx-neoumorphic/login-page';
import { JsonPipe } from '@angular/common';
import { NeoDividerComponent } from '@ngx-neoumorphic/divider';

@Component({
  selector: 'neo-common-pages',
  standalone: true,
  imports: [LoginPageComponent, JsonPipe, NeoDividerComponent],
  templateUrl: './common-pages.component.html',
  styleUrl: './common-pages.component.scss'
})
export class CommonPagesComponent {
  loginData: Partial<LoginData> = {};

  loginPageSubmit(data: Partial<LoginData>): void {
    this.loginData = data;
  }
}
