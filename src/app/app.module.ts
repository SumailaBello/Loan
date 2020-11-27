
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MyloansComponent } from './dashboard/myloans/myloans.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { IncomesourcesComponent } from './dashboard/incomesources/incomesources.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { LoancourseComponent } from './dashboard/loancourse/loancourse.component';
import { RoicalculatorComponent } from './dashboard/roicalculator/roicalculator.component';
import { SearchComponent } from './search/search.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    MyloansComponent,
    TransactionsComponent,
    IncomesourcesComponent,
    LoancourseComponent,
    RoicalculatorComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
