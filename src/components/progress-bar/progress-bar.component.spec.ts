import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
import { By } from '@angular/platform-browser';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with default values', () => {
    const progressBarElement = fixture.debugElement.query(
      By.css('.ks-progress-bar')
    );
    const trackElement = fixture.debugElement.query(
      By.css('.progress-bar-track')
    );
    const fillElement = fixture.debugElement.query(
      By.css('.progress-bar-fill')
    );

    expect(progressBarElement).toBeTruthy();
    expect(trackElement).toBeTruthy();
    expect(fillElement).toBeTruthy();

    expect(component.progress).toBe(0);
    expect(fillElement.nativeElement.style.width).toBe(
      '0%'
    );
  });

  it('should update progress on input change', () => {
    const fillElement = fixture.debugElement.query(
      By.css('.progress-bar-fill')
    );

    component.progress = 50;
    fixture.detectChanges();

    expect(fillElement.nativeElement.style.width).toBe(
      '50%'
    );

    component.progress = 75;
    fixture.detectChanges();

    expect(fillElement.nativeElement.style.width).toBe(
      '75%'
    );
  });
});
