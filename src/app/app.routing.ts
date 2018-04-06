import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
