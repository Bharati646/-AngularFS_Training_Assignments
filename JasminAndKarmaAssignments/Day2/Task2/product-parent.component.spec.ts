import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ProductParentComponent } from './product-parent.component';

describe('ProductParentComponent', () => {
  let component: ProductParentComponent;
  let fixture: ComponentFixture<ProductParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductParentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' Test child component can access', () => {
    const childComponent = fixture.debugElement.query(By.css('app-child'));
    expect(childComponent).toBeTruthy();
  });

  it('Get all child components and verify the count ', () => {
    const childComponents = fixture.debugElement.queryAll(By.css('app-child'));
    expect(childComponents.length).toBe(component.ProductArray.length);
  });

  it('Access child class properties ', () => {
    const testObj: any = {
      pid: 1,
      pname: 'Bluestar',
      price: 35000,
      category: 'AC',
      qty: 2,
    };
    const childComponent = fixture.debugElement.query(By.css('app-child'));
    expect(childComponent.properties['productObj']).toEqual(
      component.ProductArray[0]
    );
  });

  it('Trigger child class events', () => {
    const childComponent = fixture.debugElement.query(By.css('app-child'));
    const pid = childComponent.properties['productObj'].pid;
    childComponent.triggerEventHandler('onProductRemoved', pid);
    let index = component.ProductArray.findIndex(
      (item: any) => item.pid == pid
    );
    expect(index).toBe(-1);
  });
});
