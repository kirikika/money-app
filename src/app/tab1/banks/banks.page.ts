import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth/auth.service';
import { TypeOfCard } from 'src/app/debit-credit-info/debit-credit-info.component';


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
    type: TypeOfCard,
    typeOfCard: string,
    currency: string,
    cardowner: string
  }[] = [
    {
      cardPicture: 'Tinkoff_1',
      bank: 'Tinkoff',
      requisites: '...8462',
      balance: 50000,
      spent: 45000,
      type: TypeOfCard.debit,
      typeOfCard: 'MasterCard',
      currency: '₽',
      cardowner: 'Kostya'
    },
    {
      cardPicture: 'Tinkoff_Black_1',
      bank: 'Tinkoff',
      requisites: '...0072',
      balance: 10000,
      spent: 5000,
      type: TypeOfCard.debit,
      typeOfCard: 'VISA',
      currency: '$',
      cardowner: 'Kostya'
    },
    {
      cardPicture: 'Sberbank_1',
      bank: 'Sber',
      requisites: '...2191',
      balance: 10000,
      spent: 10000,
      type: TypeOfCard.debit,
      typeOfCard: 'МИР',
      currency: '₽',
      cardowner: 'Vlad'
    },
    {
      cardPicture: 'Sberbank_1',
      bank: 'Sber',
      requisites: '...2331',
      balance: 2000,
      spent: 400,
      type: TypeOfCard.debit,
      typeOfCard: 'МИР',
      currency: '₽',
      cardowner: 'Vlad'
    },
    {
      cardPicture: 'Sberbank_1',
      bank: 'Sber',
      requisites: '...2192',
      balance: 10000,
      spent: 10000,
      type: TypeOfCard.debit,
      typeOfCard: 'МИР',
      currency: '₽',
      cardowner: 'Kostya'
    },
    {
      cardPicture: 'Alfabank_2',
      bank: 'Alfa',
      requisites: '...0001',
      balance: 32130,
      spent: 540,
      type: TypeOfCard.credit,
      typeOfCard: 'VISA',
      currency: '₽',
      cardowner: 'Vlad'
    },
    {
      cardPicture: 'Alfabank_2',
      bank: 'Alfa',
      requisites: '...0002',
      balance: 32130,
      spent: 540,
      type: TypeOfCard.debit,
      typeOfCard: 'VISA',
      currency: '₽',
      cardowner: 'Kostya'
    },
    {
      cardPicture: 'Tinkoff_2',
      bank: 'Tinkoff',
      requisites: '...8082',
      balance: 300000,
      spent: 4000,
      type: TypeOfCard.debit,
      typeOfCard: 'VISA',
      currency: '₽',
      cardowner: 'Kostya'
    },
    {
      cardPicture: 'Tinkoff_1',
      bank: 'Tinkoff',
      requisites: '...8081',
      balance: 300000,
      spent: 4000,
      type: TypeOfCard.debit,
      typeOfCard: 'VISA',
      currency: '₽',
      cardowner: 'Vlad'
    },
    {
      cardPicture: 'Alfabank_1',
      bank: 'Alfa',
      requisites: '...6452',
      balance: 25000,
      spent: 50000,
      type: TypeOfCard.debit,
      typeOfCard: 'MasterCard',
      currency: '$',
      cardowner: 'Kostya'
    },
    {
      cardPicture: 'Tinkoff_1',
      bank: 'Tinkoff',
      requisites: '...8462',
      balance: 50000,
      spent: 45000,
      type: TypeOfCard.credit,
      typeOfCard: 'MasterCard',
      currency: '₽',
      cardowner: 'Kostya'
    },
    {
      cardPicture: 'Tinkoff_Black_1',
      bank: 'Tinkoff',
      requisites: '...0072',
      balance: 10000,
      spent: 5000,
      type: TypeOfCard.credit,
      typeOfCard: 'VISA',
      currency: '$',
      cardowner: 'Kostya'
    },
    {
      cardPicture: 'Tinkoff_Black_1',
      bank: 'Tinkoff',
      requisites: '...0071',
      balance: 10000,
      spent: 5000,
      type: TypeOfCard.credit,
      typeOfCard: 'VISA',
      currency: '$',
      cardowner: 'Vlad'
    },
    {
      cardPicture: 'Alfabank_1',
      bank: 'Alfa',
      requisites: '...6451',
      balance: 25000,
      spent: 50000,
      type: TypeOfCard.credit,
      typeOfCard: 'MasterCard',
      currency: '$',
      cardowner: 'Vlad'
    },
    {
      cardPicture: 'Alfabank_1',
      bank: 'Alfa',
      requisites: '...6452',
      balance: 25000,
      spent: 50000,
      type: TypeOfCard.credit,
      typeOfCard: 'MasterCard',
      currency: '$',
      cardowner: 'Kostya'
    }
  ];
  public filteredCards: {
    cardPicture: string,
    bank: string,
    requisites: string,
    balance: number,
    spent: number,
    type: TypeOfCard,
    typeOfCard: string,
    currency: string,
    cardowner: string
  }[] = [];
  public filteredBanks: string[] = [];
  public tOfCard: TypeOfCard = TypeOfCard.debit;
  public name: string = '';

  constructor(
    private _routerInfo: Router,
    private _route: ActivatedRoute,
    public _authService: AuthService,
  ) {

  }
  public ngOnInit(): void {
    this._authService.user$.subscribe(user => {
      this.name = user.name;
      console.log(user);
    })
    this._route.queryParams.subscribe(type => {
      this.tOfCard = type.type
      this.filteredCards = [];
      this.filteredBanks = [];
      this.cards.forEach((element) => {
        if (element.cardowner.toLowerCase() === this.name.toLowerCase()) {
          this.filteredCards.push(element)
        }
      });
      this.sortedByBank();
      this.filterCard();
    })
  }

  public sortedByBank(){
    if (this.filteredCards.length > 1) {
      this.filteredCards.sort((a, b) => a.bank > b.bank ? 1 : -1);
    }
  }

  public filterCard(){
    if (this.filteredCards.length !== 0) {
      for (let i = 0; i < this.cards.length; i++){
        if (this.filteredCards[i]?.type === this.tOfCard
          && this.filteredCards[i].bank !== this.filteredBanks[this.filteredBanks.length-1]){
          this.filteredBanks.push(this.filteredCards[i].bank)
        }
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
