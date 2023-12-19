import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KsSelectorComponent } from './selector.component';

describe('KsSelectorComponent', () => {
  let component: KsSelectorComponent;
  let fixture: ComponentFixture<KsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
