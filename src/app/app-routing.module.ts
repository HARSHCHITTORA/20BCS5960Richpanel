import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { RegistrationComponent } from './views/pages/registration/registration.component';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { PaymentComponent } from './views/pages/payment/payment.component';

const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegistrationComponent,
  },
  {
    path:'dashboard',
    component: DashboardComponent,

  },
  {
    path:'payment',
    component: PaymentComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
