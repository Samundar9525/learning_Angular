import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NgrxFormtoComponent } from './ngrx-formto/ngrx-formto.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path: "users", component: UserloginComponent },
  {path: "homepage",component: HomepageComponent},
  {path: "login",component: LoginComponent},
  {path: "fromto",component: NgrxFormtoComponent},

  // {path: "**",redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
