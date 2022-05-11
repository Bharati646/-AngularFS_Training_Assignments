import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeptServiceService {
  constructor() {}
  public deptno: number = 0;
  public dname: String = '';
  public loc: String = '';

  deptsArray: any[] = [
    { deptno: 10, dname: 'Accounts', loc: 'Hyd' },
    { deptno: 20, dname: 'Sales', loc: 'Pune' },
    { deptno: 30, dname: 'Marketing', loc: 'Hyd' },
  ];

  ngOnInit(): void {}

  addDept_click() {
    let obj: Dept = new Dept();
    obj.deptno = this.deptno;
    obj.dname = this.dname;
    obj.loc = this.loc;

    this.deptsArray.push(obj);
  }

  delete_click(dno: number) {
    let index = this.deptsArray.findIndex((item) => item.deptno == dno);
    this.deptsArray.splice(index, 1);
  }
}
class Dept {
  public deptno: number = 0;
  public dname: String = '';
  public loc: String = '';
}
