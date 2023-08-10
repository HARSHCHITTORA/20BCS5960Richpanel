import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Firestore,collection,addDoc, collectionData} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:any;
  password:any;
  rememberMe:any;
  constructor(
    private firestore:Firestore, private route: Router,

    
    
  ) { }

  ngOnInit(): void {
  }
  

    login()
    {
      const  collectionInstance=collection(this.firestore,'users');
      collectionData(collectionInstance).
        subscribe(data=>{
          const user = data.find(item => item['email_id'] === this.email);

          if (user) {
            // Email exists, verify the provided password
            if (user['password'] === this.password) {
              // Password matches, redirect to another page
              // You can use Angular's Router to navigate
              sessionStorage.setItem('user',user['email_id']);
              console.log('Login successful');
              this.route.navigate(['/dashboard']);
              // this.router.navigate(['/dashboard']); // Replace with your route
            } else {
              console.log('Incorrect password');
            }
          } else {
            console.log('Email not found'); 
          }
          
        });

        
      
    }
}
