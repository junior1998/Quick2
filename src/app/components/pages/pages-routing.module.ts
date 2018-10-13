import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { pagesRoutes } from './pages.routes';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  { path: 'pages', component: PagesComponent, children: pagesRoutes }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    InicioComponent,
    NavbarComponent,
    PagesComponent
  ]
})
export class PagesRoutingModule { }
