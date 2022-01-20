import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './homepage/homepage.component';
import { NgrxFormtoComponent } from './ngrx-formto/ngrx-formto.component';
import { FormtoComponent } from './modules/formto/formto.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserloginComponent,
    HeaderComponent,
    HomepageComponent,
    NgrxFormtoComponent,
    FormtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
