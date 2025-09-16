import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ConfirmPasswordWindowComponent } from './confirm-password-window/confirm-password-window.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent, title:"FASCO"},
    {path:"navbar", component:NavbarComponent},
    {path:"footer", component:FooterComponent},
    {path:"cart", component:CartComponent},
    {path:"shop", component:ShopComponent},
    {path:"checkout", component:CheckOutComponent},
    {path:"confirm-password", component:ConfirmPasswordWindowComponent},
    {path:"forget-password", component:ForgetPasswordComponent},
    {path:"new-password", component:NewPasswordComponent},
    {path:"product-page", component:ProductPageComponent},
    {path:"sign-in", component:SignInComponent},
    {path:"sign-up", component:SignUpComponent},


];
