import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public name: string = 'Vladislav';
  public isShowTransaction: boolean = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.name = 'Vadim';
    }, 5000)
  }

  public showTransaction() {
    this.isShowTransaction = !this.isShowTransaction;
  }
}
