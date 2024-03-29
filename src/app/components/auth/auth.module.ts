import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule} from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
