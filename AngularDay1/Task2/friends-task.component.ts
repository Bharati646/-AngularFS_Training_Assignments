import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-task',
  templateUrl: './friends-task.component.html',
  styleUrls: ['./friends-task.component.css'],
})
export class FriendsTaskComponent implements OnInit {
  courseArray: string[] = [
    'Katherine',
    'Smith',
    'Damon',
    'Stafin',
    'calorine ',
  ];
  constructor() {}

  ngOnInit(): void {}
}
