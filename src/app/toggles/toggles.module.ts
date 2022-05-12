import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TogglesPageRoutingModule } from './toggles-routing.module';

import { TogglesPage } from './toggles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TogglesPageRoutingModule
  ],
  declarations: [TogglesPage]
})
export class TogglesPageModule {}
