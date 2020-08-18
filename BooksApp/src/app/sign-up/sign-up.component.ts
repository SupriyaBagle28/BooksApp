import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

public signupForm;
  constructor(private fb:FormBuilder,
  private router:Router,
  private users:UserService) { }

  ngOnInit(): void {
     this.signupForm=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    username:['',[Validators.required]],
    contactno:['',[Validators.required,Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]]
  })
  }

  signUp(){
    const data = {
    id:4,
    "name": this.signupForm.get("name").value,
    "username":this.signupForm.get("username").value,
    "email": this.signupForm.get("email").value,
    "contactno": this.signupForm.get("contactno").value,
    "password": this.signupForm.get("password").value,
    };

    console.log(data);

    this.users.addUser(data).subscribe(
      (response)=>{
        console.log(response);
        
      }
    )
    this.router.navigate(['/login']);

  }

}
