import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TogglesPage } from './toggles.page';

const routes: Routes = [
  {
    path: '',
    component: TogglesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TogglesPageRoutingModule {}
