import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsInput } from './input';

describe('KsInput', () => {
  let component: KsInput;
  let fixture: ComponentFixture<KsInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsInput]
    }).compileComponents();

    fixture = TestBed.createComponent(KsInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
