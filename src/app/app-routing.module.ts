import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ResourcePageComponent} from './resource-page/resource-page.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component: AdminComponent },
  { path: 'resource-page', component: ResourcePageComponent },
  { path: 'admin', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
