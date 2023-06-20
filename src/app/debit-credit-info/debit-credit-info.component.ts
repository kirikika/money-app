import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

export enum TypeOfCard {
  debit='debit',
  credit='credit'
}
@Component({
    selector: 'debit-credit-info',
    templateUrl: 'debit-credit-info.component.html',
    styleUrls: ['debit-credit-info.component.scss']
  })

  export class DebitCreditInfoComponent {
    @Input() public cards = [
        {
          name: 'Debit',
          value: 150000,
          spend: 110000,
          type: TypeOfCard.debit
        },
        {
          name: 'Credit',
          value: 12300,
          spend: 1400,
          type: TypeOfCard.credit
        }
      ];
      constructor(
        private _router: Router
      ){
        
      }
      public redirectToCards(typeOfCard:TypeOfCard){
        this._router.navigate(['tabs/tab1/banks'], {queryParams:{
          type: typeOfCard
        }})
      }
  }