import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObserableComponent } from './custom-obserable/custom-obserable.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { IntervalComponent } from './modules/interval/interval.component';
import { OfFromComponent } from './modules/of-from/of-from.component';
import { ToarrayComponent } from './modules/toarray/toarray.component';
import { NgrxFormtoComponent } from './ngrx-formto/ngrx-formto.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path: "users", component: UserloginComponent },
  {path: "homepage",component: HomepageComponent},
  {path: "login",component: LoginComponent},
  {path: "fromto",component: NgrxFormtoComponent},
  {path: "interval",component: IntervalComponent},
  {path: "offrom",component: OfFromComponent},
  {path: "toarray",component: ToarrayComponent},
  {path: "customovserable",component: CustomObserableComponent},

  {path: "**",redirectTo: "homepage"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
