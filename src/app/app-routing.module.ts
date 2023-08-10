import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { RegistrationComponent } from './views/pages/registration/registration.component';

const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
