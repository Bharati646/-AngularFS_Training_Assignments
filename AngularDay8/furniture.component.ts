import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css'],
})
export class FurnitureComponent implements OnInit {
  productArr: Product[] = [
    { pid: 1, pname: 'Sofa', price: 74000, category: 'Furniture', qty: 1 },
    { pid: 2, pname: 'Table', price: 20000, category: 'Furniture', qty: 2 },
    { pid: 3, pname: ' Almirah', price: 24000, category: 'Furniture', qty: 1 },
    {
      pid: 4,
      pname: 'book shelf',
      price: 28000,
      category: 'Furniture',
      qty: 1,
    },
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
