import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { DeptServiceService } from './dept-service.service';

describe('DeptServiceService', () => {
  let service: DeptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test default items', () => {
    expect(service.deptsArray.length).toBe(3);
  });

  it('Test addDept_click', () => {
    service.addDept_click();
    expect(service.deptsArray.length).toBe(4);
  });

  it('Test delete_click -- for valid number', () => {
    service.delete_click(10);
    expect(service.deptsArray.length).toBe(2);
  });

  it('Test Remove Dept -- for invalid number', () => {
    let result: any = service.delete_click(15);
    expect(service.deptsArray.length).toEqual(2);
  });
});
