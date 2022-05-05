import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  id: number = 0;
  ename: string = '';
  job: string = '';
  sal: number = 0;
  deptno: number = 0;
  public empsArray: Emp[] = [];

  constructor(private dataService: DataserviceService) {}

  ngOnInit() {
    //this.getData_click();
  }

  getData_click() {
    this.dataService.getAllEmp().subscribe((resData: any) => {
      console.log(resData);
      this.empsArray = resData;
    });
  }

  addData_click() {
    let empObj: any = {};
    empObj.id = 0;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;

    console.log(empObj);

    this.dataService.addEmp(empObj).subscribe((resData: any) => {
      alert('New Employee details are added to database');
      this.getData_click();
    });
  }

  updateData_click() {
    let empObj: any = {};
    empObj.id = this.id;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.sal = this.sal;
    empObj.deptno = this.deptno;

    console.log(empObj);

    this.dataService.updateEmp(empObj).subscribe((resData: any) => {
      alert('Employee details are update to database');
      this.getData_click();
    });
  }

  deleteData_click(id: number) {
    alert('Delete task entered');
    this.dataService.deleteEmp(id).subscribe((resData: any) => {
      alert('After Dataservice calling task entered');
      alert('Employee details are deleted from database');
      this.getData_click();
    });
  }

  selectData_click(id: number) {
    this.id = id;

    this.dataService.getEmpById(id).subscribe((resData: any) => {
      this.ename = resData.ename;
      this.job = resData.job;
      this.sal = resData.sal;
      this.deptno = resData.deptno;
    });
  }
  clearFields() {
    this.ename = '';
    this.job = '';
    this.sal = 0;
    this.deptno = 0;
  }
}

class Emp {
  public id: number = 0;
  public ename: string = '';
  public job: string = '';
  public sal: number = 0;
  public deptno: number = 0;
}
