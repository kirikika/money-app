import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-banks',
  templateUrl: 'banks.page.html',
  styleUrls: ['banks.page.scss']
})

export class BanksPage implements OnInit{
  public cards:     {
    cardPicture: string,
    bank: string,
    requisites: string,
    balance: number,
    spent: number,
    type: string,
    typeOfCard: string,
    currency: string
  }[] = [
    {
      cardPicture: 'Tinkoff_1',
      bank: 'Tinkoff',
      requisites: '...8464',
      balance: 50000,
      spent: 45000,
      type: 'debit',
      typeOfCard: 'MasterCard',
      currency: '₽'
    },
    {
      cardPicture: 'Tinkoff_Black_1',
      bank: 'Tinkoff',
      requisites: '...0070',
      balance: 10000,
      spent: 5000,
      type: 'debit',
      typeOfCard: 'VISA',
      currency: '$'
    },
    {
      cardPicture: 'Sberbank_1',
      bank: 'Sber',
      requisites: '...2193',
      balance: 10000,
      spent: 10000,
      type: 'debit',
      typeOfCard: 'МИР',
      currency: '₽'
    },
    {
      cardPicture: 'Alfabank_2',
      bank: 'Alfa',
      requisites: '...0001',
      balance: 32130,
      spent: 540,
      type: 'debit',
      typeOfCard: 'VISA',
      currency: '₽'
    },
    {
      cardPicture: 'Tinkoff_2',
      bank: 'Tinkoff',
      requisites: '...8080',
      balance: 300000,
      spent: 4000,
      type: 'debit',
      typeOfCard: 'VISA',
      currency: '₽'
    },
    {
      cardPicture: 'Alfabank_1',
      bank: 'Alfa',
      requisites: '...6453',
      balance: 25000,
      spent: 50000,
      type: 'debit',
      typeOfCard: 'MasterCard',
      currency: '$'
    },
    {
      cardPicture: 'Tinkoff_1',
      bank: 'Tinkoff',
      requisites: '...8464',
      balance: 50000,
      spent: 45000,
      type: 'credit',
      typeOfCard: 'MasterCard',
      currency: '₽'
    },
    {
      cardPicture: 'Tinkoff_Black_1',
      bank: 'Tinkoff',
      requisites: '...0070',
      balance: 10000,
      spent: 5000,
      type: 'credit',
      typeOfCard: 'VISA',
      currency: '$'
    },
    {
      cardPicture: 'Alfabank_1',
      bank: 'Alfa',
      requisites: '...6453',
      balance: 25000,
      spent: 50000,
      type: 'credit',
      typeOfCard: 'MasterCard',
      currency: '$'
    }
  ];
  public filteredCards: any[] = [];
  public filteredBanks: string[] = [];
  public tOfCard: string = '';

  constructor(
    private _routerInfo: Router,
    private _route: ActivatedRoute,
  ) {

  }
  public ngOnInit(): void {
    this._route.queryParams.subscribe(type => {
      this.tOfCard = type.type
      this.filteredCards = [];
      this.filteredBanks = [];
      this.cards.forEach((element) => {
        this.filteredCards.push(element)
      });
      this.sortedByBank();
      this.filterCard();
      console.log(123);
    })
  }
  public sortedByBank(){
    this.filteredCards.sort((a, b) => a.bank > b.bank ? 1 : -1);
  }
  public filterCard(){
    for (let i = 0; i < this.cards.length; i++){
      if (this.filteredCards[i].type === this.tOfCard 
        && this.filteredCards[i].bank !== this.filteredBanks[this.filteredBanks.length-1]){
        this.filteredBanks.push(this.filteredCards[i].bank)
      }
    }
  }
  public redirectToInfo(){
    this._routerInfo.navigate(['tabs/tab1'])
  }
  public toCardGraph(){
    this._routerInfo.navigate(['tabs/tab1/banks/graph'])
  }
}
