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
import { WomenAccessoriesComponent } from './women-accessories/women-accessories.component';
import { WomensFashionComponent } from './womens-fashion/womens-fashion.component';
import { MensFashionComponent } from './mens-fashion/mens-fashion.component';
import { MenAccessoriesComponent } from './men-accessories/men-accessories.component';
import { DiscountDealsComponent } from './discount-deals/discount-deals.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
{ path: "", redirectTo: "home", pathMatch: "full" },
    {
    path: "home",
    component: HomeComponent,
    title: "FASCO",
    children: [
      { path: "", redirectTo: "womens-fashion", pathMatch: "full" }, // Default child route
      { path: "mens-fashion", component: MensFashionComponent },
      { path: "womens-fashion", component: WomensFashionComponent },
      { path: "women-accessories", component: WomenAccessoriesComponent },
      { path: "men-accessories", component: MenAccessoriesComponent },
      { path: "discount-deals", component: DiscountDealsComponent },
    ]
  },
    {path:"navbar", component:NavbarComponent},
    {path:"footer", component:FooterComponent},
    {path:"cart", component:CartComponent},
    {path:"shop", component:ShopComponent,children: [
      { path: "", redirectTo: "womens-fashion", pathMatch: "full" }, // Default child route
      { path: "mens-fashion", component: MensFashionComponent },
      { path: "womens-fashion", component: WomensFashionComponent },
      { path: "women-accessories", component: WomenAccessoriesComponent },
      { path: "men-accessories", component: MenAccessoriesComponent },
      { path: "discount-deals", component: DiscountDealsComponent },
    ]},
    {path:"checkout/:id", component:CheckOutComponent},
    {path:"confirm-password", component:ConfirmPasswordWindowComponent},
    {path:"forget-password", component:ForgetPasswordComponent},
    {path:"new-password", component:NewPasswordComponent},
    {path:"product-page", component:ProductPageComponent},
    {path:"sign-in", component:SignInComponent},
    {path:"sign-up", component:SignUpComponent},
{path:"**", component:ErrorComponent}

];
