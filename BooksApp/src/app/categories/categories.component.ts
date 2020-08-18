import { Component, OnInit } from '@angular/core';
import {categories} from '../files/CategoriesNames';
import {CategoriesList} from '../files/Categories';
import { Router } from '@angular/router';
import {Books } from '../files/Bookspecs';
import {computing} from '../files/Computingbooks';
import {biographies} from '../files/Biographies';
import {comics} from '../files/Comics';
import {CartService} from '../service/cart.service';
import {adventures} from '../files/Adventures';
import {crimes} from '../files/Crimes';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

category;
data;
Computing:CategoriesList;
adventurebooks=adventures;
biographybooks=biographies;
crimebooks=crimes;
comicbooks=comics;
computingbooks=computing;
categoriesNames= categories;
selectedcategory:CategoriesList;

  constructor(private router:Router,
  private cartService:CartService) { }

  onSelect(category: CategoriesList): void {
      this.selectedcategory = category;

  console.log(category.name);
  console.log(this.selectedcategory);
  if(category.name== "Biographies"){
      this.data = this.biographybooks;
  }else if(category.name== "Computing"){
      this.data = this.computingbooks;
  }else if(category.name== "Comics"){
    this.data = this.comicbooks;
  }else if(category.name== "Adventures"){
    this.data = this.adventurebooks;
  }else if(category.name== "Crime"){
    this.data = this.crimebooks;
  }

}

addToCart(book){
    this.router.navigate(['/mycart']);
    this.cartService.addToCart(book);
    console.log(book);
    window.alert("products successfully addded to cart");
  }


  
}
