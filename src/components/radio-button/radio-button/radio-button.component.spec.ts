import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsRadioButtonComponent } from './radio-button.component';

describe('KsRadioButtonComponent', () => {
  let component: KsRadioButtonComponent;
  let fixture: ComponentFixture<KsRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsRadioButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KsRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
