import { Component, Input } from "@angular/core";

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
        },
        {
          name: 'Credit',
          value: 12300,
          spend: 1400
        }
      ];
  }