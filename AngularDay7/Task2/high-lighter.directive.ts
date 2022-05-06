import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLighter]',
})
export class HighLighterDirective implements OnInit {
  @Input()
  appHighLighter: string = '';

  constructor(private _element: ElementRef) {}

  ngOnInit() {
    if (this.appHighLighter == 'Red') {
      this._element.nativeElement.style.textShadow = '2px 2px #FF0000';
    } else if (this.appHighLighter == 'Black') {
      this._element.nativeElement.style.textShadow = '2px 2px #000000';
    } else if (this.appHighLighter == 'Blue') {
      this._element.nativeElement.style.textShadow = '2px 2px #0000FF';
    }

    //this._element.nativeElement.style.border = '1px solid gray';
  }
}
