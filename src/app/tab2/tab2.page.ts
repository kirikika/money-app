import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public balanceHistory: any[] = [
    {
      time: new Date(),
      icon: '',
      market: 'Apple Store',
      type: 'Products',
      balance: 5000,
      card: 'Debit'
    },
    {
      time: new Date(),
      icon: '',
      market: 'Yandex Store',
      type: 'Products',
      balance: 2000,
      card: 'Credit'
    }
  ];
  public filteredBalanceHistory: any[] = [];
  public search: string = '';
  constructor() {

  }

  public ngOnInit(): void {
    this.filteredBalanceHistory = this.balanceHistory;
  }

  public doSearch(event: string) {
    this.filteredBalanceHistory = this.balanceHistory.filter(balanceItem => {
      return balanceItem.market.toLocaleLowerCase().startsWith(event.toLocaleLowerCase())
    })
    console.log(this.filteredBalanceHistory);
  }
}

