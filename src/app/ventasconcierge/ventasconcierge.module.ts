import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasconciergePageRoutingModule } from './ventasconcierge-routing.module';

import { VentasconciergePage } from './ventasconcierge.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasconciergePageRoutingModule,
    ComponentesModule,
    
  ],
  declarations: [VentasconciergePage]
})
export class VentasconciergePageModule {}
