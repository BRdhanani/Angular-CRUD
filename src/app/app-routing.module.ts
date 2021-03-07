import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDemoComponent } from './user-demo/user-demo.Component';
import { AdminDemoComponent } from './admin-demo/admin-demo.Component';
const routes: Routes = [
  {
    path: 'user-data',
    component: UserDemoComponent
  },
  {
    path: 'admin-data',
    component: AdminDemoComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./lazy-loading-admin/lazy-loading-admin.module').then(mod => mod.LazyLoadingAdminModule)
  },
  {
    path: '**',
    component: AdminDemoComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
