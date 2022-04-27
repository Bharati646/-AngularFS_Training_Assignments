import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  deptObj: Dept = { pname: 'AC', price: 450000, qty: 2 };
  deptObj1: Dept = { pname: 'TV', price: 250000, qty: 1 };
  constructor() {}

  ngOnInit(): void {}
}
class Dept {
  public pname: string = '';
  public price: number = 0;
  public qty: number = 0;
}
