import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {
    path:"users",
    component:UserloginComponent
  },

  {
    path:"login",
    component:LoginComponent
  },

  {
    path:"**",
    redirectTo:"login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
