import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoInput } from './input';

describe('NeoInput', () => {
  let component: NeoInput;
  let fixture: ComponentFixture<NeoInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoInput]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NeoInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
