import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CheckboxComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with default values', () => {
    const checkboxElement = fixture.debugElement.query(
      By.css('.ks-checkbox')
    );
    expect(checkboxElement).toBeTruthy();
    expect(component.isChecked).toBe(false);
    expect(component.isDisabled).toBe(false);
  });

  it('should toggle value on checkbox change', () => {
    const checkboxElement = fixture.debugElement.query(
      // eslint-disable-next-line sonarjs/no-duplicate-string
      By.css('.ks-checkbox-input')
    );

    expect(component.isChecked).toBe(false);

    checkboxElement.nativeElement.checked = true;
    checkboxElement.triggerEventHandler('change', {
      target: { checked: true }
    });
    fixture.detectChanges();

    expect(component.isChecked).toBe(true);
  });

  it('should call onChange on checkbox change', () => {
    const spyOnChange = jest.spyOn(component, 'onChange');

    const checkboxElement = fixture.debugElement.query(
      By.css('.ks-checkbox-input')
    );
    checkboxElement.nativeElement.checked = true;
    checkboxElement.triggerEventHandler('change', {
      target: { checked: true }
    });
    fixture.detectChanges();

    expect(spyOnChange).toHaveBeenCalledWith(true);
  });

  it('should call onTouched on checkbox blur', () => {
    const spyOnTouched = jest.spyOn(component, 'onTouched');

    const checkboxElement = fixture.debugElement.query(
      By.css('.ks-checkbox-input')
    );
    checkboxElement.triggerEventHandler('blur', {});
    fixture.detectChanges();

    expect(spyOnTouched).toHaveBeenCalled();
  });

  it('should update the view when the model changes', () => {
    const checkboxElement = fixture.debugElement.query(
      By.css('input.ks-checkbox-input')
    );

    expect(checkboxElement.nativeElement.checked).toBe(
      false
    );

    component.writeValue(true);
    fixture.whenStable().then(() => {
      expect(checkboxElement.nativeElement.checked).toBe(
        true
      );
    });
  });

  it('should disable the checkbox when setDisabledState is called', () => {
    const checkboxElement = fixture.debugElement.query(
      By.css('input.ks-checkbox-input')
    );

    expect(checkboxElement.nativeElement.disabled).toBe(
      false
    );

    component.setDisabledState(true);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(checkboxElement.nativeElement.disabled).toBe(
        true
      );
    });
  });
});
