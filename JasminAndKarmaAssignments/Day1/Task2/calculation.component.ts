import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css'],
})
export class CalculationComponent implements OnInit {
  pname: string = '';
  qty: any = '1';
  amt: any = 0;
  total: string = '';

  constructor() {}

  ngOnInit(): void {}

  TotalAmount() {
    this.total = 'Total Amount : ' + this.amt * this.qty;
  }
}
