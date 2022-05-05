import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  result: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  getEmployees() {
    this.dataService
      .getEmployeeDetailsByJob('Developer')
      .subscribe((resData) => {
        this.result = resData;
      });
  }

  getManager() {
    this.dataService.getManagersByDeptno(10).subscribe((resData) => {
      this.result = resData;
    });
  }

  getNameDesignation() {
    this.dataService.getEmployeeNameAndJob().subscribe((resData) => {
      this.result = resData;
    });
  }

  getEmployeeNotWorkinginDept10() {
    this.dataService.getEmployeeByDeptNot10().subscribe((resData) => {
      this.result = resData;
    });
  }

  getEmployeeBasedOnSalary() {
    this.dataService.getSortedArray().subscribe((resData) => {
      this.result = resData;
    });
  }
}
