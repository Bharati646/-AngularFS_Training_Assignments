import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listby-category',
  templateUrl: './product-listby-category.component.html',
  styleUrls: ['./product-listby-category.component.css'],
})
export class ProductListbyCategoryComponent implements OnInit {
  @Input()
  category: string = '';
  filter: Product[] = [];
  productArray: Product[] = [
    { Category: 'AC', ProductName: 'Daikin', price: 40000, Qty: 4 },
    { Category: 'AC', ProductName: 'Bluestar', price: 40000, Qty: 2 },
    { Category: 'Mobiles', ProductName: 'Samsung', price: 30000, Qty: 2 },
    { Category: 'Mobiles', ProductName: 'Iphone', price: 50000, Qty: 2 },
  ];
  ngOnInit() {
    alert(this.category);

    this.filter = this.productArray.filter(
      (item) => item.Category == this.category
    );
  }
}

class Product {
  public Category: string = '';
  public ProductName: string = '';
  public price: number = 0;
  public Qty: number = 0;
}
