import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { StatusIndicatorComponent } from './status-indicator.component';
import { By } from '@angular/platform-browser';

describe('StatusIndicatorComponent', () => {
  let component: StatusIndicatorComponent;
  let fixture: ComponentFixture<StatusIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusIndicatorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      StatusIndicatorComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the success status', () => {
    component.status = 'success';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(
      By.css('.icon')
    ).nativeElement;
    expect(iconElement.textContent).toBe('✔️');
    const statusIndicator = fixture.debugElement.query(
      // eslint-disable-next-line sonarjs/no-duplicate-string
      By.css('.status-indicator')
    ).nativeElement;
    expect(statusIndicator.classList).toContain('success');
  });

  it('should display the warning status', () => {
    component.status = 'warning';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(
      By.css('.icon')
    ).nativeElement;
    expect(iconElement.textContent).toBe('⚠️');
    const statusIndicator = fixture.debugElement.query(
      By.css('.status-indicator')
    ).nativeElement;
    expect(statusIndicator.classList).toContain('warning');
  });

  it('should display the error status', () => {
    component.status = 'error';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(
      By.css('.icon')
    ).nativeElement;
    expect(iconElement.textContent).toBe('❌');
    const statusIndicator = fixture.debugElement.query(
      By.css('.status-indicator')
    ).nativeElement;
    expect(statusIndicator.classList).toContain('error');
  });

  it('should display the info status', () => {
    component.status = 'info';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(
      By.css('.icon')
    ).nativeElement;
    expect(iconElement.textContent).toBe('ℹ️');
    const statusIndicator = fixture.debugElement.query(
      By.css('.status-indicator')
    ).nativeElement;
    expect(statusIndicator.classList).toContain('info');
  });

  it('should display the loading status', () => {
    component.status = 'loading';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(
      By.css('.icon')
    ).nativeElement;
    expect(iconElement.textContent).toBe('⏳');
    const statusIndicator = fixture.debugElement.query(
      By.css('.status-indicator')
    ).nativeElement;
    expect(statusIndicator.classList).toContain('loading');
  });
});
