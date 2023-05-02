import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  implements OnInit {
  @Input()
  public labelText: string = '';
  @Input()
  public placeholderText: string = ''; 
  @Input()
  public type: 'text' | 'number' | 'password' = 'text'; 

  constructor() { }

  ngOnInit() {
  }

}
