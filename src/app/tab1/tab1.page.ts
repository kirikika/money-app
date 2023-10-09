import { Component, OnInit } from '@angular/core';
import { TypeOfCard } from '../debit-credit-info/debit-credit-info.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../components/auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public name: string = '';
  public isShowTransaction: boolean = false;
  public cards2 = [
    {
      name: 'Debit2',
      value: 1500234,
      spend: 444444,
      type: TypeOfCard.debit
    },
    {
      name: 'Credit2',
      value: 12300,
      spend: 234234234234,
      type: TypeOfCard.credit
    }
  ];
  constructor(
    public _authService: AuthService,
  ) {}

  ngOnInit(): void {
    this._authService.user$.subscribe(user => {
      this.name = user.name;
      console.log(user);
    })
  }

  public showTransaction() {
   this.isShowTransaction = !this.isShowTransaction;
  }
}
