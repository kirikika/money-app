import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
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
      type: 'Debit',
      typeOfCard: 'MasterCard',
      currency: '₽'
    },
    {
      cardPicture: 'Tinkoff_Black_1',
      bank: 'Tinkoff',
      requisites: '...0070',
      balance: 10000,
      spent: 5000,
      type: 'Debit',
      typeOfCard: 'VISA',
      currency: '$'
    },
    {
      cardPicture: 'Sberbank_1',
      bank: 'Sber',
      requisites: '...2193',
      balance: 10000,
      spent: 10000,
      type: 'Debit',
      typeOfCard: 'МИР',
      currency: '₽'
    },
    {
      cardPicture: 'Alfabank_2',
      bank: 'Alfa',
      requisites: '...0001',
      balance: 32130,
      spent: 540,
      type: 'Debit',
      typeOfCard: 'VISA',
      currency: '₽'
    },
    {
      cardPicture: 'Tinkoff_2',
      bank: 'Tinkoff',
      requisites: '...8080',
      balance: 300000,
      spent: 4000,
      type: 'Debit',
      typeOfCard: 'VISA',
      currency: '₽'
    },
    {
      cardPicture: 'Alfabank_1',
      bank: 'Alfa',
      requisites: '...6453',
      balance: 25000,
      spent: 50000,
      type: 'Debit',
      typeOfCard: 'MasterCard',
      currency: '$'
    }
  ];
  public filteredCards: any[] = [];
  public filteredBanks: string[] = [];
  constructor() {

  }

  public ngOnInit(): void {
    this.cards.forEach((element) => {
      this.filteredCards.push(element)
    });
    console.log(this.cards);
    this.sortedByBank();
    this.filterCard();
  }
  public sortedByBank(){
    this.filteredCards.sort((a, b) => a.bank > b.bank ? 1 : -1);
    console.log(this.filteredCards);
  }
  public filterCard(){
    console.log(this.filteredBanks);

    for (let i = 0; i < this.cards.length; i++){
      if (this.filteredCards[i].bank !== this.filteredBanks[this.filteredBanks.length-1]){
        this.filteredBanks.push(this.filteredCards[i].bank)
      }
    }
    console.log(this.filteredBanks);
  }
}
