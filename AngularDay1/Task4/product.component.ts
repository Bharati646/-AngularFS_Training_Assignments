import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  pname: string = '';
  price: number = 0;
  qty: number = 1;
  result: number = 0;
  color_style: string = '';

  login_click() {
    this.result = this.price * this.qty;
    if (this.result > 10000) {
      this.color_style = 'color:green;';
    } else {
      this.color_style = 'color:blue;';
    }
  }
}
