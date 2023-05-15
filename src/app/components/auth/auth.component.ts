import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  implements OnInit {
  public pageType: 'create' | 'auth' = 'auth'
  public correctLogin: string = 'Vadim'
  public correctPass: string = 'Vadim777'
  
  public  function(){
  
    if(this.correctLogin === 'Vadim' && this.correctPass === 'Vadim777'){
      return 'Welcome'
    }
    else {
      return 'Not correct login and password'
    }

  }

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe(route => {
      this.pageType = route['type'];
      console.log(route['type']);
    })
  }

  public auth() {
    this._router.navigate(['tabs']);
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
}
