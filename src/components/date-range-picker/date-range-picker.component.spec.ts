import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { DateRangePickerComponent } from './date-range-picker.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('DateRangePickerComponent', () => {
  let component: DateRangePickerComponent;
  let fixture: ComponentFixture<DateRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, DateRangePickerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      DateRangePickerComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two input fields', () => {
    const inputs = fixture.debugElement.queryAll(
      By.css('input[type="date"]')
    );
    expect(inputs.length).toBe(2);
  });

  it('should update start date when input changes', () => {
    const startDateInput = fixture.debugElement.query(
      By.css('#start-date')
    ).nativeElement;
    // eslint-disable-next-line sonarjs/no-duplicate-string
    startDateInput.value = '2023-01-01';
    startDateInput.dispatchEvent(new Event('input'));

    expect(component.startDate).toBe('2023-01-01');
  });

  it('should update end date when input changes', () => {
    const endDateInput = fixture.debugElement.query(
      By.css('#end-date')
    ).nativeElement;
    // eslint-disable-next-line sonarjs/no-duplicate-string
    endDateInput.value = '2023-01-10';
    endDateInput.dispatchEvent(new Event('input'));

    expect(component.endDate).toBe('2023-01-10');
  });

  it('should display correct values in the input fields', (done) => {
    component.startDate = '2023-01-01';
    component.endDate = '2023-01-10';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const startDateInput = fixture.debugElement.query(
        By.css('#start-date')
      ).nativeElement;
      const endDateInput = fixture.debugElement.query(
        By.css('#end-date')
      ).nativeElement;

      expect(startDateInput.value).toBe('2023-01-01');
      expect(endDateInput.value).toBe('2023-01-10');
      done();
    });
  });
});
