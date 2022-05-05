import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  baseUrl: string = 'http://localhost:3000/emp';

  dataArray: any[] = [];

  constructor(private httpObj: HttpClient) {}

  // Read All
  public getAllEmp(): Observable<any> {
    return this.httpObj.get(this.baseUrl);
  }

  public getEmpById(id: number): any {
    return this.httpObj.get(this.baseUrl + id);
  }

  // Create
  public addEmp(empObj: any): any {
    console.log(empObj);
    return this.httpObj.post(this.baseUrl, empObj);
  }

  // Update
  public updateEmp(empObj: any): any {
    alert('update in dataservies');
    return this.httpObj.put(this.baseUrl + empObj.id, empObj);
  }

  // Delete
  public deleteEmp(id: number): any {
    alert('in dataservice');
    return this.httpObj.delete(this.baseUrl + id);
  }
}
class Emp {
  public id: number = 0;
  public ename: string = '';
  public job: string = '';
  public sal: number = 0;
  public deptno: number = 0;
}
