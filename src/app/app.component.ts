import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ResourcePageComponent } from './resource-page/resource-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cloud-services-frontend';

  constructor(private router: Router) {
    this.router.resetConfig([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'admin',
        component: HomeComponent
      },
      { path: 'resource-page', component: ResourcePageComponent },
      { path: 'home', component: AdminComponent }
    ]);
  }
}
