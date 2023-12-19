import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsCardComponent } from './card.component';

describe('KsCardComponent', () => {
  let component: KsCardComponent;
  let fixture: ComponentFixture<KsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
