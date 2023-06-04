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
    number: string,
    balance: number,
    spent: number,
    typeOfCard: string
  }[] = [
    {
      cardPicture: 'Tinkoff_1',
      bank: 'Tinkoff',
      number: '...8464',
      balance: 50000,
      spent: 45000,
      typeOfCard: 'Debit'
    },
    {
      cardPicture: 'Tinkoff_Black_1',
      bank: 'Tinkoff',
      number: '...0070',
      balance: 10000,
      spent: 5000,
      typeOfCard: 'Debit'
    },
    {
      cardPicture: 'Sberbank_1',
      bank: 'Sber',
      number: '...2193',
      balance: 10000,
      spent: 10000,
      typeOfCard: 'Debit'
    },
    {
      cardPicture: 'Alfabank_2',
      bank: 'Alfa',
      number: '...0001',
      balance: 32130,
      spent: 540,
      typeOfCard: 'Debit'
    },
    {
      cardPicture: 'Tinkoff_2',
      bank: 'Tinkoff',
      number: '...8080',
      balance: 300000,
      spent: 4000,
      typeOfCard: 'Debit'
    },
    {
      cardPicture: 'Alfabank_1',
      bank: 'Alfa',
      number: '...6453',
      balance: 25000,
      spent: 50000,
      typeOfCard: 'Debit'
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
