import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile-component',
  templateUrl: './my-profile-component.component.html',
  styleUrls: ['./my-profile-component.component.css']
})
export class MyProfileComponentComponent implements OnInit {

id: string;
books:string;

 constructor() { }

 ngOnInit(): void {
     this.id = localStorage.getItem('token'); 
     this.books= JSON.parse(localStorage.getItem('item')) ; 

  }

}
