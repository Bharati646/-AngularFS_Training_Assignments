import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-communication',
  templateUrl: './server-communication.component.html',
  styleUrls: ['./server-communication.component.css'],
})
export class ServerCommunicationComponent implements OnInit {
  public record: any;
  public respData: any[] = [];

  constructor(private httpObj: HttpClient) {}
  ngOnInit(): void {
    this.getData_click();
  }
  getData_click() {
    let url = 'https://reqres.in/api/users';
    this.httpObj.get(url).subscribe((resData: any) => {
      this.respData = resData.data;
      console.log(this.respData);
    });
  }
}
class Emp {
  public empno: number = 0;
  public ename: string = '';
  public job: string = '';
  public sal: number = 0;
}
