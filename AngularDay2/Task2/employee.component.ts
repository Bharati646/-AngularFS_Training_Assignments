import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  @Input() sortOption: string = '';
  @Input() sortOptionJob: string = '';
  // @Input() sortOptionSal: string = '';
  sortedArray: Emp[] = [];

  empArray: Emp[] = [
    { empno: 6589, ename: 'Katherine', job: 'Analyst', sal: 50000 },
    { empno: 6767, ename: 'Karthik', job: 'Developer', sal: 45000 },
    { empno: 6547, ename: 'James', job: 'Developer', sal: 50000 },
    { empno: 6098, ename: 'Mark', job: 'Manager', sal: 4000 },
    { empno: 7045, ename: 'Crystal', job: 'Manager', sal: 100000 },
    { empno: 7567, ename: 'Austin', job: 'Manager', sal: 55000 },
  ];

  ngOnChanges(): void {
    if (this.sortOption == 'ename') {
      this.empArray.sort((a: any, b: any) =>
        a[this.sortOption] < b[this.sortOption] ? -1 : 1
      );
    } else if (this.sortOptionJob == 'job') {
      this.empArray.sort((a: any, b: any) =>
        a[this.sortOptionJob] < b[this.sortOptionJob] ? -1 : 1
      );
    } /*else if (this.sortOptionSal == 'sal') {
      this.empArray.sort((a: any, b: any) =>
        a[this.sortOptionSal] < b[this.sortOptionSal] ? -1 : 1
      );
    } */
  }
}

class Emp {
  public empno: number = 0;
  public ename: string = '';
  public job: string = '';
  public sal: number = 0;
}
