import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3> Employee list </h3>
    <ul *ngFor="let employee of employees"> 
      <li> {{ employee.name }} </li>
    </ul>
    
  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    // {"id":1, "name":"Andrew", "age":30},
    // {"id":2, "name":"Isabelle", "age":12},
    // {"id":3, "name":"Garfield", "age":20},
    // {"id":4, "name":"Sandra", "age":30},
  ] as any;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
                            .subscribe(data => this.employees = data)
  }

}
