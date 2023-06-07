import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasconciergePage } from './ventasconcierge.page';

const routes: Routes = [
  {
    path: '',
    component: VentasconciergePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasconciergePageRoutingModule {}
