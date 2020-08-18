import { Component, OnInit } from '@angular/core';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

items;
  constructor( private cartService:CartService) { }

  ngOnInit(): void {
     this.items = this.cartService.getItems();
    console.log(this.items);
  }
  buy(){
    window.alert("product purchased successfully");
    // localStorage.setItem('isitemselected','true');
    localStorage.setItem('item',JSON.stringify(this.items));
  }

}
