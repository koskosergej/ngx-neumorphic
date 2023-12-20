import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submit event with form values', () => {
    const loginData: any = {
      username: 'testuser',
      password: 'testpassword'
    };

    let emittedData: Partial<any> = {};

    component.submit.subscribe((data) => {
      emittedData = data;
    });

    component.form.setValue(loginData);
    component.onSubmit();

    expect(emittedData).toEqual(loginData);
  });

  it('should not emit submit event when form is invalid', () => {
    const loginData: any = {
      username: '',
      password: ''
    };

    let emittedData: Partial<any> | null = null;

    component.submit.subscribe((data) => {
      emittedData = data;
    });

    component.form.setValue(loginData);
    component.onSubmit();

    expect(emittedData).toBeNull();
  });

  it('should have required validators for username and password fields', () => {
    const usernameControl = component.form.get('username') as FormControl;
    const passwordControl = component.form.get('password') as FormControl;

    usernameControl.setValue('');
    passwordControl.setValue('');

    expect(usernameControl.valid).toBeFalsy();
    expect(passwordControl.valid).toBeFalsy();

    usernameControl.setValue('testuser');
    passwordControl.setValue('testpassword');

    expect(usernameControl.valid).toBeTruthy();
    expect(passwordControl.valid).toBeTruthy();
  });
});
