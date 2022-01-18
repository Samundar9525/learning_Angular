import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ButtoncheckComponent } from './buttoncheck/buttoncheck.component';
import { HeaderComponent } from './header/header.component';
import { MyformComponent } from './myform/myform.component';
import {FormsModule} from "@angular/forms";
import { MypipePipe } from './pipes/mypipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtoncheckComponent,
    HeaderComponent,
    MyformComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
