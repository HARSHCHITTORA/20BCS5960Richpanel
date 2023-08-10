import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Firestore,collection,addDoc} from '@angular/fire/firestore';

@Component({  
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private firestore:Firestore) { }
  registerForm: FormGroup|any;
  name:string="";
  email:any;
  password:any;
  rememberMe:any;

  ngOnInit(): void {
  

}

  register()
  {
    // console.log(this.rememberMe);
    
    let req = {
      user: this.name,
      email_id: this.email,
      password: this.password,
      rememberme:this.rememberMe,
    };

    console.log(req);
    const collectionInstance=collection(this.firestore,'users');
    addDoc(collectionInstance,req).then(() => {
      console.log('data saved');
      this.name = '';
      this.email='';
      this.password='';
      this.rememberMe=false;
    })
    .catch(err => {
      console.log(err);
    });
    
  }
}
