import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  implements OnInit {
  public pageType: 'create' | 'auth' = 'auth'
  // public correctLogin: string = 'Vadim'
  // public correctPass: string = 'Vadim777'
  public name: string = '';
  public login: string = '';
  public password: string = '';
  
  // public  function(){
  //   if(this.correctLogin === 'Vadim' && this.correctPass === 'Vadim777'){
  //     return 'Welcome'
  //   } else {
  //     return 'Not correct login and password'
  //   }
  // }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(route => {
      this.pageType = route['type'];
      console.log(route['type']);
    })
  }

  public back(): void {
    this._router.navigate(['']);
  }

  public navigate(): void {
    if (this.pageType === 'create') {
      this._router.navigate(['auth/auth']);
    } else {
      this._router.navigate(['auth/create']);
    }
  }

  public toSignUp(){
    if (this.pageType === 'create') {
      this._router.navigate(['auth/create/sign-up']);
      this._authService.user$.next({name: this.name, login: this.login, password: this.password})
    } else {
      this._router.navigate(['tabs'])
    }

  }
}
