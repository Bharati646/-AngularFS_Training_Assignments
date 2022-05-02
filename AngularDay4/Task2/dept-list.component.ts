import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css'],
})
export class DeptListComponent {
  @Input()
  location: string = '';

  filteredArray: Dept[] = [];

  deptsArray: Dept[] = [
    { deptno: 10, dname: 'Accounts', loc: 'Hyd' },
    { deptno: 20, dname: 'Sales', loc: 'Pune' },
    { deptno: 30, dname: 'Marketing', loc: 'Hyd' },
    { deptno: 40, dname: 'Operations', loc: 'Chnnai' },
    { deptno: 50, dname: 'Admin', loc: 'Pune' },
    { deptno: 60, dname: 'Finance', loc: 'Hyd' },
    { deptno: 70, dname: 'Testing', loc: 'Mumbai' },
    { deptno: 10, dname: 'Accounts', loc: 'Hyd' },
    { deptno: 20, dname: 'Sales', loc: 'Pune' },
    { deptno: 30, dname: 'Marketing', loc: 'Hyd' },
    { deptno: 40, dname: 'Operations', loc: 'Chnnai' },
    { deptno: 50, dname: 'Admin', loc: 'Pune' },
    { deptno: 60, dname: 'Finance', loc: 'Hyd' },
    { deptno: 70, dname: 'Testing', loc: 'Mumbai' },
  ];

  // ngOnChanges ---  component life cycle method that excutes when every input data is updated
}

class Dept {
  public deptno: number = 0;
  public dname: string = '';
  public loc: string = '';
}
