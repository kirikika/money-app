import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'src/app/shared/app-button/app-button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  public buttonType = ButtonType;
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {}

  public login() {
    this._router.navigate(['auth']);
  }
}
