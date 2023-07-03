import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListpostPageRoutingModule } from './listpost-routing.module';

import { ListpostPage } from './listpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListpostPageRoutingModule
  ],
  declarations: [ListpostPage]
})
export class ListpostPageModule {}
