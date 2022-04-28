import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept-crud',
  templateUrl: './dept-crud.component.html',
  styleUrls: ['./dept-crud.component.css'],
})
export class DeptCRUDComponent implements OnInit {
  deptno: number = 0;
  dname: string = '';
  loc: string = '';

  deptsArray: Dept[] = [
    { deptno: 10, dname: 'Accounts', loc: 'Hyd' },
    { deptno: 20, dname: 'Sales', loc: 'Pune' },
    { deptno: 30, dname: 'Marketing', loc: 'Hyd' },
  ];
  constructor() {}

  ngOnInit(): void {}

  addDept_click() {
    let deptObj: Dept = new Dept();
    deptObj.deptno = this.deptno;
    deptObj.dname = this.dname;
    deptObj.loc = this.loc;

    this.deptsArray.push(deptObj);
  }

  delete_click(dno: number) {
    let index = this.deptsArray.findIndex((item) => item.deptno == dno);
    this.deptsArray.splice(index, 1);
  }

  updateDept() {
    let obj: any = this.deptsArray.find((item) => item.deptno == this.deptno);
    alert(obj);
    obj.deptno = this.deptno;
    obj.dname = this.dname;
    obj.loc = this.loc;
    this.clearForm();
  }
  clearForm() {
    this.deptno = 0;
    this.dname = '';
    this.loc = '';
  }

  select_click(dno: number) {
    let deptObj: any = this.deptsArray.find((item) => item.deptno == dno);
    this.deptno = deptObj.deptno;
    this.dname = deptObj.dname;
    this.loc = deptObj.loc;
  }
}
class Dept {
  dname: string = '';
  deptno: number = 0;
  loc: string = '';
}
