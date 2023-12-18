import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPagesComponent } from './common-pages.component';

describe('CommonPagesComponent', () => {
  let component: CommonPagesComponent;
  let fixture: ComponentFixture<CommonPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonPagesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
