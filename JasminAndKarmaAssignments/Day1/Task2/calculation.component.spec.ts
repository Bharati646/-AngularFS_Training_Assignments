import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationComponent } from './calculation.component';

describe('CalculationComponent', () => {
  let component: CalculationComponent;
  let fixture: ComponentFixture<CalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' Default values for  quantity should be 1 ', () => {
    const strQty: any = component.qty;
    expect(strQty).toBe('1');
  });

  it(' default result message should be empty', () => {
    const strOutput: string = component.total;
    expect(strOutput).toBe('');
  });

  it('result message for calling a method', () => {
    component.qty = 4;
    component.amt = 10000;
    component.TotalAmount();
    const strOutput: string = component.total;
    expect(strOutput).toBe('Total Amount : 40000');
  });

  it('result message for calling a method and generate NAN values for other than numbers', () => {
    component.qty = 'abc';
    component.amt = 1000;
    component.TotalAmount();
    const strOutput: string = component.total;

    expect(strOutput).toBe('Total Amount : NaN');
  });
});
