import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasconciergePageRoutingModule } from './ventasconcierge-routing.module';

import { VentasconciergePage } from './ventasconcierge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasconciergePageRoutingModule
  ],
  declarations: [VentasconciergePage]
})
export class VentasconciergePageModule {}
