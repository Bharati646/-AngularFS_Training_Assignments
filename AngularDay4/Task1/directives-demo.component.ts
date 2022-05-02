import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css'],
})
export class DirectivesDemoComponent {
  displayMode: string = '';
  list() {
    this.displayMode = 'List';
  }
  Table() {
    this.displayMode = 'Table';
  }
  LargeIcons() {
    this.displayMode = 'Large Card';
  }

  SmallIcons() {
    this.displayMode = 'Small Card';
  }
  public ProductsArray: any[] = [
    {
      pid: '345',
      pname: 'AC',
      price: '25000',
      Image:
        'https://cdn.pixabay.com/photo/2021/09/08/07/20/air-conditioner-6605973_960_720.jpg',
      specification: 'Daikin AC with 1 Ton ',
      model: 'CG46G2J72677',
    },
    {
      pid: '678',
      pname: 'TV',
      price: '35000',
      Image:
        'https://png.pngitem.com/pimgs/s/175-1755458_led-tv-png-toshiba-40-full-hd-led.png',
      specification: 'One plus 1+ Smart TV.',
      model: 'DFG6G2J72677',
    },
    {
      pid: '456',
      pname: 'Fridge',
      price: '45000',
      Image:
        'https://www.kindpng.com/picc/m/219-2190979_haier-american-style-fridge-zer-hrf-haier-american.png',
      specification: 'convertible fridge double door',
      model: 'JKH46G2J72677',
    },

    {
      pid: '348',
      pname: 'Laptop',
      price: '80000',
      Image:
        'https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_960_720.jpg',
      specification: '4GB Ram ,1TB harddisk,Windows 10 licensed',
      model: 'TYG46G2J72677',
    },
    {
      pid: '134',
      pname: 'HeadPhones',
      price: '25000',
      Image:
        'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_960_720.jpg',
      specification: '40Hz – 20kHz frequency response',
      model: 'FGG46G2J72677',
    },
  ];
}
