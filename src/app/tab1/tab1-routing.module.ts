import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { BanksPage } from './banks/banks.page';
import { GraphComponent } from './banks/graph/graph.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },{
    path: 'banks',
    component: BanksPage,
  },{
    path: 'banks/graph',
    component: GraphComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
