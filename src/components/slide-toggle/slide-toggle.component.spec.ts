import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsSlideToggleComponent } from './slide-toggle.component';

describe('KsSlideToggleComponent', () => {
  let component: KsSlideToggleComponent;
  let fixture: ComponentFixture<KsSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsSlideToggleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KsSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
