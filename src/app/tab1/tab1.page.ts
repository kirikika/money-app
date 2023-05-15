import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public name: string = 'Vladislav';
  public isShowTransaction: boolean = false;
  public cards2 = [
    {
      name: 'Debit2',
      value: 1500234,
      spend: 444444,
    },
    {
      name: 'Credit2',
      value: 12300,
      spend: 234234234234
    }
  ];
  constructor() {}

  ngOnInit(): void {

  }

  public showTransaction() {
   this.isShowTransaction = !this.isShowTransaction;
  }
}
