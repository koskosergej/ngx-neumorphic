import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoTextArea } from './textarea.component';

describe('NeoTextArea', () => {
  let component: NeoTextArea;
  let fixture: ComponentFixture<NeoTextArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoTextArea]
    }).compileComponents();

    fixture = TestBed.createComponent(NeoTextArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
