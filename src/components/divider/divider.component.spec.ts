import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { KsDividerComponent } from './divider.component';

describe('KsDividerComponent', () => {
  let component: KsDividerComponent;
  let fixture: ComponentFixture<KsDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KsDividerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(KsDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
