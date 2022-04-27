import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public ID: number = 546564564;
  public uname: string = 'Stephan';
  public job: string = 'Manager';
  public sal: number = 750000;
  public depo: number = 10;
}
