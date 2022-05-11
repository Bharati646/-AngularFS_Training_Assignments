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

  it('should render child component elements', () => {
    const childComponent = fixture.debugElement.query(By.css('app-child'));
    expect(childComponent).toBeTruthy();
  });

  it('should render all child component elements ', () => {
    const childComponents = fixture.debugElement.queryAll(By.css('app-child'));
    expect(childComponents.length).toBe(component.prodsArray.length);
  });

  it('testing child component properties ', () => {
    const testObj: any = {
      pid: 1,
      pname: 'Bluestar',
      price: 35000,
      category: 'AC',
      qty: 2,
    };
    const childComponent = fixture.debugElement.query(By.css('app-child'));
    expect(childComponent.properties['productObj']).toEqual(
      component.prodsArray[0]
    );
  });

  it('testing child component events on onProductRemoved', () => {
    const childComponent = fixture.debugElement.query(By.css('app-child'));
    const pid = childComponent.properties['productObj'].pid;
    childComponent.triggerEventHandler('onProductRemoved', pid);
    let index = component.prodsArray.findIndex((item: any) => item.pid == pid);
    expect(index).toBe(-1);
  });
});
