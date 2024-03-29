import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public balanceHistory: any[] = [
    {
      time: new Date('December 17, 1995 03:00:00'),
      icon: 'apple',
      market: 'Apple Store',
      type: 'Appstore payment',
      balance: 5000,
      card: 'Debit'
    },
    {
      time: new Date('December 10, 2001 03:00:00'),
      icon: 'yandex',
      market: 'Yandex Store',
      type: 'Yandexstore',
      balance: 2000,
      card: 'Credit'
    },
    {
      time: new Date('December 17, 1995 03:24:00'),
      icon: 'food',
      market: 'Food Store',
      type: 'Products',
      balance: 2000,
      card: 'Credit'
    },
    {
      time: new Date(),
      icon: 'alex',
      market: 'Alex Blackson',
      type: 'Transfers',
      balance: 2000,
      card: 'Credit'
    },
    {
      time: new Date('December 10, 2001 03:00:00'),
      icon: 'google',
      market: 'Google',
      type: 'Products',
      balance: 2000,
      card: 'Credit'
    },
    {
      time: new Date(),
      icon: 'apple',
      market: 'Apple Store',
      type: 'Products',
      balance: 5000,
      card: 'Debit'
    },
    {
      time: new Date(),
      icon: 'google',
      market: 'Google',
      type: 'Products',
      balance: 2000,
      card: 'Credit'
    },
    {
      time: new Date(),
      icon: 'yandex',
      market: 'Yandex Store',
      type: 'Products',
      balance: 2000,
      card: 'Credit'
    },
    {
      time: new Date(),
      icon: 'food',
      market: 'Food Store',
      type: 'Products',
      balance: 2000,
      card: 'Credit'
    },
    {
      time: new Date(),
      icon: 'food',
      market: 'Food Store',
      type: 'Products',
      balance: 2000,
      card: 'Credit'
    },

  ];
  public filters: string[] = ['last 2 Week', 'debit'];
  public filteredBalanceHistory: any[] = [];
  public search: string = '';
  public today = new Date()
  public filteredDates: (string | null)[] = []
  constructor(public datePipe: DatePipe) {
 
  }

  public ngOnInit(): void {
    this.balanceHistory.forEach((element) => {
      this.filteredBalanceHistory.push(element)
    });
    this.sortedByDate();
    this.filterDate();
  }
  public sortedByDate(){
    this.filteredBalanceHistory.sort((a, b) => b.time-a.time);
  }
  public doSearch(event: string) {
    this.filteredDates = []
    this.filteredBalanceHistory = this.balanceHistory.filter(balanceItem => {
      return balanceItem.market.toLocaleLowerCase().includes(event.toLocaleLowerCase())
    })
    this.filterDate()
  }
  public deleteFilter(){
    this.filters.pop()
  }
  public filterDate(){
    this.filteredBalanceHistory
    .map((element) => this.datePipe.transform(element.time))
    .forEach((item, pos) => {
      if (this.filteredBalanceHistory.map((element) => 
      this.datePipe.transform(element.time)).indexOf(item) === pos
      ){
        this.filteredDates.push(item)
      }else{
        this.filteredDates.push('')
      }
    })
  }

}

