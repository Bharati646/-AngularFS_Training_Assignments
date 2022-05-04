import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todo: string = '';

  addData_click() {
    let observableObj = new Observable((subscriber) => {
      subscriber.next(this.todo);
    });

    observableObj.subscribe({
      next: (resData: any) => {
        this.todoArray.push({ task: resData, id: this.todoArray.length + 1 });
      },
      error: (errorData: any) => {
        console.log('Error Handled by code : ' + errorData);
      },
    });
  }

  edit_click(id: any) {
    let observableObj = new Observable((subscriber) => {
      subscriber.next(id);
    });

    observableObj.subscribe({
      next: (data: any) => {
        let newArray = this.todoArray.map((item) => {
          if (item.id === data) {
            return { ...item, isCheck: !item.isCheck };
          } else {
            return item;
          }
        });
        this.todoArray = newArray;
      },
      error: (errorData: any) => {
        console.log('Error Handled by code : ' + errorData);
      },
    });
  }

  delete_click(id: any) {
    let observableObj = new Observable((subscriber) => {
      subscriber.next(id);
    });

    observableObj.subscribe({
      next: (data: any) => {
        let index = this.todoArray.findIndex((item) => item.id == data);
        this.todoArray.splice(index, 1);
      },
      error: (errorData: any) => {
        console.log('Error Handled by code : ' + errorData);
      },
    });
  }
  public todoArray: any[] = [
    { id: 1, task: 'Java', isCheck: false, isChecked: false },
    { id: 2, task: 'Spring', isCheck: false, isChecked: false },
    { id: 3, task: 'Angular', isCheck: false, isChecked: false },
    { id: 4, task: 'Hibernate', isCheck: false, isChecked: false },
    { id: 5, task: 'Ajax', isCheck: false, isChecked: false },
  ];
}
