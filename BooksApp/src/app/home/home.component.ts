import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

id: string;
  constructor(private users:UserService,
  private router:Router) { }

  ngOnInit(): void {
     this.id = localStorage.getItem('token'); 
  }

  logout() {  
    console.log('logout');  
    this.users.logout();  
    this.router.navigate(['/login']);  
  }  

}
