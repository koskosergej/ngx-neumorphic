import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsTextArea } from './textarea.component';

describe('KsTextArea', () => {
  let component: KsTextArea;
  let fixture: ComponentFixture<KsTextArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsTextArea]
    }).compileComponents();

    fixture = TestBed.createComponent(KsTextArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
