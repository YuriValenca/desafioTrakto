import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthGuard } from '../auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [AuthGuard]
})
export class AdminModule { }
