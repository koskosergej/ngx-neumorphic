import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isOpen to false', () => {
    expect(component.isOpen).toEqual(false);
  });

  it('should emit close event and set isOpen to false when closeDialog is called', () => {
    const spy = jest.spyOn(component.close, 'emit');
    component.isOpen = true;
    component.closeDialog();
    expect(component.isOpen).toEqual(false);
    expect(spy).toHaveBeenCalled();
  });
});
