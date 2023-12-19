import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoSelectorComponent } from './selector.component';

describe('NeoSelectorComponent', () => {
  let component: NeoSelectorComponent;
  let fixture: ComponentFixture<NeoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NeoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
