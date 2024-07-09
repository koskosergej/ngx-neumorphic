import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { IconButtonComponent } from './icon-button.component';
import { By } from '@angular/platform-browser';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the default icon', () => {
    const iconEl = fixture.debugElement.query(
      By.css('mat-icon')
    ).nativeElement;
    expect(iconEl.getAttribute('fonticon')).toContain(
      'home'
    );
  });

  it('should display the input icon', () => {
    component.icon = 'favorite';
    fixture.detectChanges();
    const iconEl = fixture.debugElement.query(
      By.css('mat-icon')
    ).nativeElement;
    expect(iconEl.getAttribute('fonticon')).toContain(
      'favorite'
    );
  });

  it('should set the correct size for the button and icon', () => {
    component.size = 80;
    fixture.detectChanges();
    const buttonEl = fixture.debugElement.query(
      By.css('.ks-icon-button')
    ).nativeElement;
    const iconEl = fixture.debugElement.query(
      By.css('mat-icon')
    ).nativeElement;
    expect(buttonEl.style.width).toBe('80px');
    expect(buttonEl.style.height).toBe('80px');
    expect(iconEl.style.fontSize).toBe('48px'); // 80 * 0.6
  });

  it('should set the correct icon color', () => {
    component.color = 'red';
    fixture.detectChanges();
    const iconEl = fixture.debugElement.query(
      By.css('mat-icon')
    ).nativeElement;
    expect(iconEl.style.color).toBe('red');
  });
});
