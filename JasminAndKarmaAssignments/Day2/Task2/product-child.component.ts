import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css'],
})
export class ProductChildComponent {
  @Input() productObj: any = {};
  @Output() onProductRemoved = new EventEmitter<number>();

  public remove(pid: number) {
    this.onProductRemoved.emit(pid);
  }
}
