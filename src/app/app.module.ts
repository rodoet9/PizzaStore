import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenusComponent } from './menus/menus.component';
import { MenusListComponent } from './menus/menus-list/menus-list.component';
import { MenusDetailComponent } from './menus/menus-detail/menus-detail.component';
import { MenusItemComponent } from './menus/menus-list/menus-item/menus-item.component';
import { YourOwnPizzaComponent } from './your-own-pizza/your-own-pizza.component';
import { YourOwnPizzaEditComponent } from './your-own-pizza/your-own-pizza-edit/your-own-pizza-edit.component';
import { DropdownDirective } from './common/dropdown.directive';
import { MenuWelcomeComponent } from './menus/menu-welcome/menu-welcome.component';
import { YourOwnPizzaService } from './services/your-own-pizza.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuService } from './services/menus.service';
import { ShortenPipe } from './custom-pipes/shorten.pipe';
import { OrdersComponent } from './orders/orders.component';
import { PizzaCartComponent } from './pizza-cart/pizza-cart.component';
import { OrderService } from './services/order.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './auth/loading-spinner/loading-spinner.component';

import {
  NgbAlertModule,
  NgbCarouselModule,
  NgbModule,
  NgbRating,
  NgbRatingConfig,
  NgbRatingModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CarouselBasicComponent } from './home/carousel-basic/carousel-basic.component';
import { BenvenutoComponent } from './home/benvenuto/benvenuto.component';
import { BenvenutoItemComponent } from './home/benvenuto/benvenuto-item/benvenuto-item.component';
import { BenvenutoService } from './services/benvenutoCard.service';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { HomeMenuService } from './services/homeMenu.service';
import { HomeMenuItemComponent } from './home/home-menu/home-menu-item/home-menu-item.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderFullComponent } from './header-full/header-full.component';
import { MenuWelcomeDescComponent } from './menus/menu-welcome/menu-welcome-desc/menu-welcome-desc.component';
import { MenuWelcomeInfoComponent } from './menus/menu-welcome/menu-welcome-info/menu-welcome-info.component';
import { MenuWelcomeReviewsComponent } from './menus/menu-welcome/menu-welcome-reviews/menu-welcome-reviews.component';
import { MenusEditComponent } from './menus/menus-edit/menus-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenusComponent,
    MenusListComponent,
    MenusEditComponent,
    MenusDetailComponent,
    MenusItemComponent,
    YourOwnPizzaComponent,
    YourOwnPizzaEditComponent,
    DropdownDirective,
    MenuWelcomeComponent,
    ShortenPipe,
    OrdersComponent,
    AuthComponent,
    PizzaCartComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    CarouselBasicComponent,
    BenvenutoComponent,
    BenvenutoItemComponent,
    MenusDetailComponent,
    HomeMenuComponent,
    HomeMenuItemComponent,
    FooterComponent,
    HeaderFullComponent,
    MenuWelcomeDescComponent,
    MenuWelcomeInfoComponent,
    MenuWelcomeReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    NgbRatingModule,
    NgbAlertModule,
    NgbTooltipModule
  ],
  providers: [
    YourOwnPizzaService,
    MenuService,
    OrderService,
    BenvenutoService,
    HomeMenuService,
    NgbRatingConfig,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
