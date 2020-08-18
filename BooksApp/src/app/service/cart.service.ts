import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

items=[];
  constructor(private httpClient:HttpClient) { }

  addToCart(book){
    this.items.push(book);
  }

  getItems(){
    return this.items;
  }
}
