import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegistrationComponent } from './views/pages/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, } from '@angular/fire/compat/firestore/';
import {AngularFireModule} from '@angular/fire/compat';
// import { initializeApp, initializeApp,provideFirebaseApp } from '@angular/fire/app'
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { PaymentComponent } from './views/pages/payment/payment.component';

// import { PasswordModule } from 'primeng/password';
// import { InputTextModule } from 'primeng/inputtext';
// import { PasswordModule } from 'primeng/password';
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    PaymentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    // InputTextModule,
    // PasswordModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
