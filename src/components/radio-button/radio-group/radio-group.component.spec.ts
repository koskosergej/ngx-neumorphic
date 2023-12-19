import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeumorphicRadioGroupComponent } from './radio-group.component';

describe('NeumorphicRadioGroupComponent', () => {
  let component: NeumorphicRadioGroupComponent;
  let fixture: ComponentFixture<NeumorphicRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeumorphicRadioGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NeumorphicRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
