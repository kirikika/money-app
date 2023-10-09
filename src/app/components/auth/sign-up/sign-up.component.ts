import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'src/app/shared/app-button/app-button.component';
import { AuthService } from '../auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  public name: string = '';
  public login: string = '';
  public password: string = '';
  public email: string = '';
  public country: string = '';
  public birthday: string = '';
  public gender: string = '';
  public buttonType: ButtonType = ButtonType.cancel;
  public activation: boolean = true;
  public today = new Date();

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) {

  }

  public redirectToCreate(){
    this._router.navigate(['auth/create'])
  }

  public save() {
    const user = {
      name: this.name,
      login: this.login,
      password: this.password,
      email: this.email,
      country: this.country,
      birthday: this.birthday,
      gender: this.gender
    };
    console.log(user);
    this._authService.user$.next(user);
    // next({
    //   name: this.name, 
    //   login: this.login, 
    //   password: this.password, 
    //   email: this.email,
    // })
    this._router.navigate(['tabs']);
  }
  public changeData() {
    this.activation = !this.activation
  }

  ngOnInit(

  ) {
    this._authService.user$.subscribe(user => {
      this.name = user.name;
      this.login = user.login;
      this.password = user.password;
      console.log(user);
    });

  }

}
