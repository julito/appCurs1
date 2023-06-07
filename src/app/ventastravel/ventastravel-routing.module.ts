import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentastravelPage } from './ventastravel.page';

const routes: Routes = [
  {
    path: '',
    component: VentastravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentastravelPageRoutingModule {}
