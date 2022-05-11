import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.css'],
})
export class ProductParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public ProductArray: any[] = [
    { pid: 1, pname: 'Bluestar', price: 35000, category: 'AC', qty: 2 },
  ];

  public removeProduct(pid: number) {
    var index = this.ProductArray.findIndex((p: any) => p.pid == pid);
    this.ProductArray.splice(index, 1);
  }
}
