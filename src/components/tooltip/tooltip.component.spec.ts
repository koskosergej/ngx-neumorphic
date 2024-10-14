import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';
import { By } from '@angular/platform-browser';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the tooltip initially', () => {
    const tooltipElement = fixture.debugElement.query(
      By.css('.tooltip')
    );
    expect(tooltipElement).toBeNull();
  });

  it('should display the tooltip when mouse enters', () => {
    const container = fixture.debugElement.query(
      // eslint-disable-next-line sonarjs/no-duplicate-string
      By.css('.tooltip-container')
    );
    container.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    const tooltipElement = fixture.debugElement.query(
      By.css('.tooltip')
    ).nativeElement;
    expect(tooltipElement).toBeTruthy();
    expect(tooltipElement.textContent).toContain(
      component.message
    );
  });

  it('should hide the tooltip when mouse leaves', () => {
    const container = fixture.debugElement.query(
      By.css('.tooltip-container')
    );
    container.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    container.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();

    const tooltipElement = fixture.debugElement.query(
      By.css('.tooltip')
    );
    expect(tooltipElement).toBeNull();
  });

  it('should display the correct tooltip message', () => {
    component.message = 'Custom Tooltip Message';
    fixture.detectChanges();

    const container = fixture.debugElement.query(
      By.css('.tooltip-container')
    );
    container.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();

    const tooltipElement = fixture.debugElement.query(
      By.css('.tooltip')
    ).nativeElement;
    expect(tooltipElement.textContent).toBe(
      'Custom Tooltip Message'
    );
  });
});
