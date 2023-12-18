import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeumorphicRadioButtonComponent } from './radio-button.component';

describe('NeumorphicRadioButtonComponent', () => {
  let component: NeumorphicRadioButtonComponent;
  let fixture: ComponentFixture<NeumorphicRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeumorphicRadioButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NeumorphicRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
