import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { RegistrationComponent } from './views/pages/registration/registration.component';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { PaymentComponent } from './views/pages/payment/payment.component';
import { ActivePlanComponent } from './views/pages/active-plan/active-plan.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
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

  },
  {
    path:'activeplan',
    component: ActivePlanComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
