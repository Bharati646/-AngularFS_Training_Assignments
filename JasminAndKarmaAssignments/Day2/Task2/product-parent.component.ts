import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.css'],
})
export class ProductParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public prodsArray: any[] = [
    { pid: 1, pname: 'Bluestar', price: 35000, category: 'AC', qty: 2 },
  ];

  public removeProduct(pid: number) {
    var index = this.prodsArray.findIndex((x: any) => x.pid == pid);
    this.prodsArray.splice(index, 1);
  }
}
