import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isOpen to false', () => {
    expect(component.isOpen).toEqual(false);
  });

  it('should initialize selectedOption to an empty string', () => {
    expect(component.selectedOption).toEqual('');
  });

  it('should toggle isOpen when toggleDropdown is called', () => {
    const initialValue = component.isOpen;
    component.toggleDropdown();
    expect(component.isOpen).toBe(!initialValue);
  });

  it('should set selectedOption and close dropdown when an option is selected', () => {
    const option = 'Option 1';
    component.options = [
      'Option 1',
      'Option 2',
      'Option 3'
    ];
    fixture.detectChanges();
    const optionElement = fixture.debugElement.queryAll(
      By.css('ul.dropdown-list li')
    )[0];
    optionElement.triggerEventHandler(
      'click',
      new Event('click')
    );
    expect(component.selectedOption).toEqual(option);
    expect(component.isOpen).toEqual(false);
  });
});
