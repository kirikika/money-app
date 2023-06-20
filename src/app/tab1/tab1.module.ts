import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DebitCreditInfoComponent } from '../debit-credit-info/debit-credit-info.component';
import { BanksPage } from './banks/banks.page';
import { CardComponent } from './banks/card/card.component';
import { GraphComponent } from './banks/graph/graph.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SharedModule,
  ],
  declarations: [Tab1Page, DebitCreditInfoComponent, BanksPage, CardComponent, GraphComponent]
})
export class Tab1PageModule {}
