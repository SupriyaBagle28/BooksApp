import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {IRegisteredUsers} from '../files/RegisteredUsers';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

isUserLoggedin:boolean;
 url:string="http://localhost:3000/RegisteredUsers";
  constructor(private http: HttpClient) { }

getUsers(): Observable<IRegisteredUsers[]>{
  return this.http.get<IRegisteredUsers[]>(this.url);
}

addUser(newuser:IRegisteredUsers): Observable<IRegisteredUsers>{
    return this.http.post<IRegisteredUsers>(
      this.url, newuser ,{ headers: new HttpHeaders({
        'content-type':'application/Json'}) 
      }
    )
  }



logout() :void {    
   localStorage.setItem('isLoggedIn','false');    
   localStorage.removeItem('token');
  //  localStorage.setItem('isitemselected','null');
   localStorage.removeItem('item');    
   }  
}
