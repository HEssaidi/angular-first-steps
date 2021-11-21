import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string ="/assets/data/employees.json"

  constructor(private http: HttpClient) { }


  getEmployees(){
    // return [
    //   {"id":1, "name":"Andrew", "age":30},
    //   {"id":2, "name":"Isabelle", "age":12},
    //   {"id":3, "name":"Garfield", "age":20},
    //   {"id":4, "name":"Sandra", "age":30},
    // ]
    return this.http.get<IEmployee>(this._url);
  }
}
