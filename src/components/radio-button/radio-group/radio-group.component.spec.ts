import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { KsRadioGroupComponent } from './radio-group.component';

describe('KsRadioGroupComponent', () => {
  let component: KsRadioGroupComponent;
  let fixture: ComponentFixture<KsRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsRadioGroupComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(
      KsRadioGroupComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
