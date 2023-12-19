import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoSlideToggleComponent } from './slide-toggle.component';

describe('NeoSlideToggleComponent', () => {
  let component: NeoSlideToggleComponent;
  let fixture: ComponentFixture<NeoSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoSlideToggleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NeoSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
