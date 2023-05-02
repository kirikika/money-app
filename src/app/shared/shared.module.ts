import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';
import { AppButtonComponent } from './app-button/app-button.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppButtonComponent, InputComponent],
  imports: [CommonModule],
  exports: [AppButtonComponent, InputComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [],
})
export class SharedModule {}