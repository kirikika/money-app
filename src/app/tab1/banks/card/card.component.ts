import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
@Input() 
  public cardOfBank: {
    cardPicture: string,
    bank: string,
    requisites: string,
    balance: number,
    spent: number,
    type: string,
    typeOfCard: string,
    currency: string,
    cardowner: string
  } = {
    cardPicture: 'Tinkoff_1',
    bank: 'Tinkoff',
    requisites: '...8464',
    balance: 50000,
    spent: 45000,
    type: 'Debit',
    typeOfCard: 'MasterCard',
    currency: '₽',
    cardowner: 'Kostya'
  }
  constructor() { }

  ngOnInit() {}

}
