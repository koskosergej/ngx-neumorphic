import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { CommonPagesComponent } from './common-pages.component';
import { LoginPageComponent } from '@ngx-ks/login-page';
import { JsonPipe } from '@angular/common';
import { KsDividerComponent } from '@ngx-ks/divider';
import { PageNotFoundComponent } from '@ngx-ks/page-not-found';

describe('CommonPagesComponent', () => {
  let component: CommonPagesComponent;
  let fixture: ComponentFixture<CommonPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonPagesComponent,
        LoginPageComponent,
        JsonPipe,
        KsDividerComponent,
        PageNotFoundComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loginData with an empty object', () => {
    expect(component.loginData).toEqual({});
  });

  it('should cache loginPageSubmit method', () => {
    const originalLoginData = component.loginData;

    // Call loginPageSubmit method with mock data
    component.loginPageSubmit({
      username: 'test',
      password: '123456'
    });

    // Check if loginData got updated
    expect(component.loginData).not.toEqual(
      originalLoginData
    );
    expect(component.loginData).toEqual({
      username: 'test',
      password: '123456'
    });

    // Call loginPageSubmit method again with different mock data
    component.loginPageSubmit({
      username: 'another',
      password: '654321'
    });

    // Check if loginData got updated with the new data
    expect(component.loginData).toEqual({
      username: 'another',
      password: '654321'
    });
  });
});
