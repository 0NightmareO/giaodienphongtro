import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  err ="";
  isEmail=false;
  isPassword=false;
  email='';
  password='';
  onFocusEmail(){
    this.isEmail = true;
  }
  onFocusPassword(){
    this.isPassword = true;
  }
constructor(private _login: LoginService, private _router: Router){}

  onSubmit():void{
    //alert(this.email + ' - ' + this.password)
    if(this.email=='' || this.password==''){
      alert('Please fill in all fields');
    }else{
      this._login.login({email: this.email,
                        password :this.password})
        .subscribe(
        (response) => {
          alert('Login successful');
          this._router.navigate(["/"]);
        },
        (err)=>{
          alert('Login fail');
        }
      )

      
      
    }
  }
  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton?.addEventListener('click', () => {
      container?.classList.add('right-panel-active');
    });

    signInButton?.addEventListener('click', () => {
      container?.classList.remove('right-panel-active');
    });
  }
  
}