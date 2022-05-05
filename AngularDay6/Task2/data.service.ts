import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataArray: any[] = [];
  baseUrl: string = ' http://localhost:3000/emp/';

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
    return this.httpObj.put(this.baseUrl + empObj.id, empObj);
  }

  // Delete
  public deleteEmp(id: number): any {
    return this.httpObj.delete(this.baseUrl + id);
  }

  getEmployeeDetailsByJob(job: string): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.filter((item) => item.job == job);
      })
    );
  }

  getManagersByDeptno(deptno: number): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.filter((item) => item.job == 'Manager');
      })
    );
  }

  getEmployeeNameAndJob(): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.map((item) => {
          return { ename: item.ename, job: item.job };
        });
      })
    );
  }

  getEmployeeByDeptNot10(): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.filter((item) => item.deptno != 10);
      })
    );
  }

  getSortedArray(): Observable<any[]> {
    return this.httpObj.get<any[]>(this.baseUrl).pipe(
      map((res) => {
        return res.sort((x, y) => (x.sal < y.sal ? 1 : -1));
      })
    );
  }
}
class Emp {
  public id: number = 0;
  public ename: string = '';
  public job: string = '';
  public sal: number = 0;
  public deptno: number = 0;
}
