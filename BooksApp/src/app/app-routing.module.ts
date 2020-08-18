import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyCartComponent} from './my-cart/my-cart.component';
import { MyProfileComponentComponent } from './my-profile-component/my-profile-component.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'signup', component:SignUpComponent},
  {path:'home',component:HomeComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'contactus',component:ContactUsComponent},
 {path:'logout',component:LogoutComponent},
  {path:'mycart', component:MyCartComponent},
  {path:'profile',component:MyProfileComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
