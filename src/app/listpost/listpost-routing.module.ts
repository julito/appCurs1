import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListpostPage } from './listpost.page';

const routes: Routes = [
  {
    path: '',
    component: ListpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListpostPageRoutingModule {}
