import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { KsInput } from '@ngx-ks/input';

class MockElementRef extends ElementRef {
  constructor() {
    super(undefined);
  }
}

describe('KsInputComponent', () => {
  let component: KsInput;
  let fixture: ComponentFixture<KsInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsInput],
      providers: [
        {
          provide: ElementRef,
          useClass: MockElementRef // Use the mock ElementRef
        },
        {
          provide: NgControl,
          useValue: {
            control: {
              hasValidator: jest.fn().mockReturnValue(true)
            },
            disabled: true
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KsInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set required property based on control validator', () => {
    // Mock the NgControl
    const ngControl = TestBed.inject(NgControl);
    component.ngControl = ngControl as any;

    if (!component.ngControl.control) {
      throw new Error('component.ngControl.control is not defined');
    }

    // Simulate NgControl having a required validator
    component.ngControl.control.hasValidator = jest.fn().mockReturnValue(true);

    expect(component.required).toBe(true);

    // Simulate NgControl not having a required validator
    component.ngControl.control.hasValidator = jest.fn().mockReturnValue(false);

    expect(component.required).toBe(false);
  });

  it('should set disabled property based on NgControl', () => {
    const ngControl = TestBed.inject(NgControl);
    component.ngControl = ngControl as any;

    // Simulate NgControl being disabled
    // @ts-expect-error test
    component.ngControl.disabled = true;

    expect(component.disabled).toBe(true);

    // Simulate NgControl not being disabled
    // @ts-expect-error test
    component.ngControl.disabled = false;

    expect(component.disabled).toBe(false);
  });
});
