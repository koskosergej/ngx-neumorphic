import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UnitInputComponent } from './unit-input.component';
import { DebugElement } from '@angular/core';

describe('UnitInputComponent', () => {
  let component: UnitInputComponent;
  let fixture: ComponentFixture<UnitInputComponent>;
  let incrementButton: DebugElement;
  let decrementButton: DebugElement;
  let inputElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitInputComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    incrementButton = fixture.debugElement.query(
      By.css('#increment-button')
    );
    decrementButton = fixture.debugElement.query(
      By.css('#decrement-button')
    );
    inputElement = fixture.debugElement.query(
      By.css('input')
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize value to 0', () => {
    expect(component.value).toBe(0);
  });

  it('should increment value and emit valueChange event', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    component.increment();
    expect(component.value).toBe(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should decrement value and emit valueChange event', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    component.value = 1;
    component.decrement();
    expect(component.value).toBe(0);
    expect(spy).toHaveBeenCalledWith(0);
  });

  it('should not decrement value below 0', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    component.value = 0;
    component.decrement();
    expect(component.value).toBe(0);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should update value on input change and emit valueChange event', () => {
    const spy = jest.spyOn(component.valueChange, 'emit');
    const inputEvent = new Event('input');
    inputElement.nativeElement.value = '5';
    inputElement.nativeElement.dispatchEvent(inputEvent);
    expect(component.value).toBe(5);
    expect(spy).toHaveBeenCalledWith(5);
  });

  it('should call increment when increment button is clicked', () => {
    const spy = jest.spyOn(component, 'increment');
    incrementButton.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
    expect(component.value).toBe(1);
  });

  it('should call decrement when decrement button is clicked', () => {
    const spy = jest.spyOn(component, 'decrement');
    component.value = 1;
    fixture.detectChanges();
    decrementButton.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
    expect(component.value).toBe(0);
  });
});
