import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  productArr: Product[] = [
    { pid: 1, pname: 'IPhone12', price: 74000, category: 'Mobile', qty: 1 },
    { pid: 2, pname: 'Samsung', price: 20000, category: 'Mobile', qty: 2 },
    { pid: 3, pname: 'Samsung 13 ', price: 24000, category: 'Mobile', qty: 1 },
    { pid: 4, pname: 'Narzo30', price: 28000, category: 'Mobile', qty: 1 },
  ];

  constructor() {}

  ngOnInit(): void {}
}

class Product {
  pid: number = 0;

  pname: string = '';

  price: number = 0;

  category: string = '';

  qty: number = 0;
}
