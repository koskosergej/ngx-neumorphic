import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterTestingModule } from '@angular/router/testing';
import { KsButton } from '@ngx-ks/button';
import { Router } from '@angular/router';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule.withRoutes([]),
        KsButton,
        PageNotFoundComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      PageNotFoundComponent
    );
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home', () => {
    const navigateSpy = jest
      .spyOn(router, 'navigate')
      .mockReturnValue(Promise.resolve(true));
    component.goToHome();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});
