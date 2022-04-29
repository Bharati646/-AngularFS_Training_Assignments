import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataservicesService {
  empno: number = 0;
  ename: string = '';
  job: string = '';
  sal: number = 0;
  deptno: number = 0;
  dataArray: Employee[] = [
    { empno: 6589, ename: 'SRIRAM', job: 'MANAGER', sal: 3200, deptno: 30 },
    { empno: 6369, ename: 'SMITH', job: 'CLERK', sal: 800, deptno: 20 },
    { empno: 6499, ename: 'ALLEN', job: 'SALESMAN', sal: 1600, deptno: 30 },
    { empno: 6521, ename: 'WARD', job: 'ANALYST', sal: 1250, deptno: 30 },
    { empno: 6566, ename: 'JONES', job: 'MANAGER', sal: 2975, deptno: 20 },
    { empno: 7654, ename: 'MARTIN', job: 'SALESMAN', sal: 1250, deptno: 30 },
    { empno: 7698, ename: 'BLAKE', job: 'MANAGER', sal: 2850, deptno: 30 },
    { empno: 7782, ename: 'CLARK', job: 'MANAGER', sal: 2450, deptno: 10 },
  ];
  public getEmpData(): any[] {
    return this.dataArray;
  }

  public addEmployee(
    empno: number,
    ename: string,
    job: string,
    sal: number,
    deptno: number
  ) {
    let empObj: Employee = new Employee();
    empObj.empno = empno;
    empObj.ename = ename;
    empObj.job = job;
    empObj.sal = sal;
    empObj.deptno = deptno;
    alert('job' + job);

    this.dataArray.push(empObj);
    alert(empObj);
  }

  public deleteEmployee(empno: number) {
    let index = this.dataArray.findIndex((item) => item.empno == empno);
    this.dataArray.splice(index, 1);
  }
}

class Employee {
  public empno: number = 0;
  public ename: string = '';
  public job: string = '';
  public sal: number = 0;
  public deptno: number = 0;
}
