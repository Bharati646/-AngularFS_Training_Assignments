import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-grades',
  templateUrl: './employee-grades.component.html',
  styleUrls: ['./employee-grades.component.css'],
})
export class EMployeeGradesComponent {
  public usersArray: any[] = [
    { sno: '1', uname: 'Smith', grades: '2' },
    { sno: '2', uname: 'Scott', grades: '1' },
    { sno: '3', uname: 'Nancy', grades: '3' },
    { sno: '4', uname: 'Ruth', grades: '4' },
    { sno: '1', uname: 'Smith', grades: '2' },
    { sno: '2', uname: 'Scott', grades: '1' },
    { sno: '3', uname: 'Nancy', grades: '3' },
    { sno: '4', uname: 'Ruth', grades: '4' },
  ];
}
