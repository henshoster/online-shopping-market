import { TokenInterceptorService } from "./service/token-interceptor.service";
import { AuthGuard } from "./guard/auth.guard";
import { AuthService } from "./service/auth.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "./category/category.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiConnectorService } from "./service/api-connector.service";
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryIdToNamePipe } from './pipes/category-id-to-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    CategoryComponent,
    HomePageComponent,
    ShoppingComponent,
    ProductComponent,
    ShoppingCartComponent,
    CartItemComponent,
    PageNotFoundComponent,
    CategoryIdToNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    ApiConnectorService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
