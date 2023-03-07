import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MenuWelcomeDescComponent } from './menus/menu-welcome/menu-welcome-desc/menu-welcome-desc.component';
import { MenuWelcomeInfoComponent } from './menus/menu-welcome/menu-welcome-info/menu-welcome-info.component';
import { MenuWelcomeReviewsComponent } from './menus/menu-welcome/menu-welcome-reviews/menu-welcome-reviews.component';
import { MenuWelcomeComponent } from './menus/menu-welcome/menu-welcome.component';
import { MenusDetailComponent } from './menus/menus-detail/menus-detail.component';
import { MenusEditComponent } from './menus/menus-edit/menus-edit.component';
import { MenusComponent } from './menus/menus.component';
import { OrdersComponent } from './orders/orders.component';
import { PizzaCartComponent } from './pizza-cart/pizza-cart.component';
import { YourOwnPizzaComponent } from './your-own-pizza/your-own-pizza.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'menus',
    component: MenusComponent,
  },
  { path: 'your-own-pizza', component: YourOwnPizzaComponent },
  {
    path: 'menu-welcome',
    component: MenuWelcomeComponent,
    children: [
      { path: 'desc', component: MenuWelcomeDescComponent },
      { path: 'info', component: MenuWelcomeInfoComponent },
      { path: 'reviews', component: MenuWelcomeReviewsComponent },
    ],
  },
  { path: 'orders', component: OrdersComponent },
  { path: 'pizza-cart', component: PizzaCartComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: MenusEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
