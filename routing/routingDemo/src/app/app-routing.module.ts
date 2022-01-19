import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopageComponent } from './nopage/nopage.component';

const routes: Routes = [

  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:"login/:id",
    component:LoginComponent
  },

  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"./",
    component:AppComponent
  },

  {
    path:"**",
    component:NopageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
