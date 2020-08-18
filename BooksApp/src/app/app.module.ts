import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyCartComponent } from './my-cart/my-cart.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoriesComponent } from './categories/categories.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {UserService} from './service/user.service';
import {CartService} from './service/cart.service';
import { LogoutComponent } from './logout/logout.component';
import { MyProfileComponentComponent } from './my-profile-component/my-profile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCartComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NavBarComponent,
    ContactUsComponent,
    CategoriesComponent,
    LogoutComponent,
    MyProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
