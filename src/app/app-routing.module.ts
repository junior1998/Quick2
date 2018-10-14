import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
// import { NavbarPrinComponent } from './components/navbar-prin/navbar-prin.component';

// import { NavbarComponent } from './components/shared/navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent},
  { path: 'sistema',
    loadChildren: './components/pages/pages.module#PagesModule',
  },
  { path: '**', redirectTo:'registrar' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    RegistrarComponent,
    LoginComponent
    // NavbarPrinComponent
    // NavbarComponent
  ]
})
export class AppRoutingModule { }
