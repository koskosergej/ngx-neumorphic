import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeoDividerComponent } from './divider.component';

describe('NeoDividerComponent', () => {
  let component: NeoDividerComponent;
  let fixture: ComponentFixture<NeoDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoDividerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NeoDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
