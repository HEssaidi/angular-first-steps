import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css'],
  template: `
    <h3 [class]="fonstStyle" class="style-color"> hello world </h3>
    <input type="text" #phone placeholder="phone number">   
    <button (click)="onClickSubmit(phone.value)">Submit</button>
    <h1 [class]="fonstStyle" class="style-color" *ngIf="false"> 
      Structural directives 
    </h1>
    <div [ngSwitch]='color'>
    <div *ngSwitchCase="'red'">you picked red color </div>
    <div *ngSwitchCase="'blue'">you picked blue color </div>
    <div *ngSwitchCase="'green'">you picked green color </div>
    <div *ngSwitchDefault>pick another color </div>
    </div>
    <div *ngFor='let color of colors; let first = first; let last = last; odd as o'>
      <h1> {{first}} {{last}} {{color}} {{o}}</h1>
    </div>

    <h1> {{ "hello" + parentData}} </h1> 
    <p> {{ person | json }} </p> 
    <p> {{ name | uppercase | slice:1 }} </p> 
    <button (click)="fireEvent()">Send to parent</button> 
  `,
  styles: [` 
    .style-text {
      font-style:italic;
    }
    .style-color {
      color:green;
    }
  `]
})
export class TestComponent implements OnInit {
   name="hajar"
   @Input() public parentData: any;
   @Output() public childEvent= new EventEmitter();
   public person ={
     firstname:"hajar",
     lastname:"esijuubub",
   }

   fonstStyle="style-text"
   public color="green"
   public colors=["blue", "green", "white","yellow"]


  constructor() { }

  ngOnInit(): void {
  }

  gretting(){
    return "hello "+ this.name
  }
  onClickSubmit(phone: string){
    console.log(phone)
  }

  fireEvent(){
      this.childEvent.emit('Hey Im from child component')
  }
}
