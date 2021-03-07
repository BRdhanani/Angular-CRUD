import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingAdminRoutingModule } from './lazy-loading-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [
    CommonModule,
    LazyLoadingAdminRoutingModule
  ],
  exports: [
    LoginComponent,
    ListComponent
  ]
})
export class LazyLoadingAdminModule { }
