import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    console.log(email);
    console.log(password);
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
