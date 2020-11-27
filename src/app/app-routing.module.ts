import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MyloansComponent } from './dashboard/myloans/myloans.component';
import { LoancourseComponent } from './dashboard/loancourse/loancourse.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { IncomesourcesComponent } from './dashboard/incomesources/incomesources.component';
import { RoicalculatorComponent } from './dashboard/roicalculator/roicalculator.component';

const routes: Routes = [
  { path: '/', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'myloans', component: MyloansComponent },
    { path: 'loancourse', component: LoancourseComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'incomesources', component: IncomesourcesComponent },
    { path: 'roicalculator', component: RoicalculatorComponent },
    // { path: '',component: DashboardComponent, pathMatch: 'full' }, 
  ] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }