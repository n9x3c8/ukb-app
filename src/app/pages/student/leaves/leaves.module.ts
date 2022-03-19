import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeavesPageRoutingModule } from './leaves-routing.module';

import { LeavesPage } from './leaves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeavesPageRoutingModule
  ],
  declarations: [LeavesPage]
})
export class LeavesPageModule {}
