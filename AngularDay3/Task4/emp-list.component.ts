import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../dataservices.service';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  public ename: string = '';
  public empno: number = 0;
  public job: string = '';
  public sal: number = 0;
  public deptno: number = 0;
  public empsArray: any[] = [];
  public empsArray1: [] = [];
  constructor(private _dataService: DataservicesService) {}

  ngOnInit() {
    this.getData_click();
  }

  getData_click() {
    this.empsArray = this._dataService.getEmpData();
  }
  addEmployee_click() {
    alert('add');
    this._dataService.addEmployee(
      this.empno,
      this.ename,
      this.job,
      this.sal,
      this.deptno
    );
    alert(this.empno);
  }

  deleteEmployee_click() {
    this._dataService.deleteEmployee(this.empno);
  }
}
