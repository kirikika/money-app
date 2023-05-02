import { Component, Input, OnInit } from '@angular/core';

export enum ButtonType {
  accept = 'accept',
  cancel = 'cancel'
}

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent  implements OnInit {
  @Input()
  public textButton: string = '';
  @Input()
  public type: ButtonType = ButtonType.accept;

  constructor() { }

  ngOnInit() {}

}
