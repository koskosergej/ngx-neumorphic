import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { TableComponent } from './table.component';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of columns', () => {
    component.columns = ['Name', 'Age', 'Occupation'];
    fixture.detectChanges();
    const thElements = fixture.debugElement.queryAll(
      By.css('th')
    );
    expect(thElements.length).toBe(3);
    expect(
      thElements[0].nativeElement.textContent.trim()
    ).toBe('Name');
    expect(
      thElements[1].nativeElement.textContent.trim()
    ).toBe('Age');
    expect(
      thElements[2].nativeElement.textContent.trim()
    ).toBe('Occupation');
  });

  it('should render the correct number of rows', () => {
    component.columns = ['Name', 'Age', 'Occupation'];
    component.data = [
      { Name: 'John Doe', Age: 30, Occupation: 'Engineer' },
      {
        Name: 'Jane Smith',
        Age: 25,
        Occupation: 'Designer'
      },
      {
        Name: 'Sam Johnson',
        Age: 40,
        Occupation: 'Manager'
      }
    ];
    fixture.detectChanges();
    const trElements = fixture.debugElement.queryAll(
      By.css('tbody tr')
    );
    expect(trElements.length).toBe(3);
  });

  it('should display the correct data in the cells', () => {
    component.columns = ['Name', 'Age', 'Occupation'];
    component.data = [
      { Name: 'John Doe', Age: 30, Occupation: 'Engineer' },
      {
        Name: 'Jane Smith',
        Age: 25,
        Occupation: 'Designer'
      },
      {
        Name: 'Sam Johnson',
        Age: 40,
        Occupation: 'Manager'
      }
    ];
    fixture.detectChanges();
    const tdElements = fixture.debugElement.queryAll(
      By.css('td')
    );
    expect(
      tdElements[0].nativeElement.textContent.trim()
    ).toBe('John Doe');
    expect(
      tdElements[1].nativeElement.textContent.trim()
    ).toBe('30');
    expect(
      tdElements[2].nativeElement.textContent.trim()
    ).toBe('Engineer');
  });
});
