import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'payment-history',
    templateUrl: 'payment-history.html',
    styleUrls: ['payment-history.scss']
  })

  export class PaymentHistoryComponent implements OnInit {
    @Input() public market = {
      time: new Date(),
      icon: 'meow',
      market: 'Meow Store',
      type: 'Products',
      balance: 2000,
      card: 'Credit'
    }

    public ngOnInit(): void {
      console.log(this.market);
    }
  }