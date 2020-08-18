import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import { Router } from '@angular/router';
import {IRegisteredUsers} from '../files/RegisteredUsers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 
 loginForm;
  constructor(private fb:FormBuilder,
  private router:Router,  
  private users:UserService) { }

ngOnInit(): void {
  this.loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
 
   this.users.logout();  
}

validate(username,password){
    let flag = 0;
    this.users.
      getUsers().subscribe(
        data => {
          data.forEach(user => {

            if (username == user.username && password == user.password) {
              flag = 1;
              localStorage.setItem('isloggedIn',"true");
              localStorage.setItem('token',username);

              this.router.navigate(['/home']);
            }
          })
          if (flag == 0) { window.alert("Please check username and password!") }

        }
      )
  }
 
  
  login(){
     console.log(this.loginForm.controls.username.value);
    console.log(this.loginForm.controls.password.value);
    this.validate(this.loginForm.controls.username.value,this.loginForm.controls.password.value);

  }
}
