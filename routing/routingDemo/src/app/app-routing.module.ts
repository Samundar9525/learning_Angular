import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  },

  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"/",
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
