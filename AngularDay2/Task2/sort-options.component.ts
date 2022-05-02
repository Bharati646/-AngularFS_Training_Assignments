import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.css'],
})
export class SortOptionsComponent {
  @Output()
  onNameChange: EventEmitter<string> = new EventEmitter();
  onJobChange: EventEmitter<string> = new EventEmitter();
  // onSalChange: EventEmitter<string> = new EventEmitter();
  strName: string = 'ename';
  strJob: string = 'job';
  strSal: string = 'sal';
  name_change() {
    this.onNameChange.emit(this.strName);
  }
  Job_change() {
    this.onJobChange.emit(this.strJob);
  }
  /*Sal_change() {
    this.onSalChange.emit(this.strSal);
  } */
}
