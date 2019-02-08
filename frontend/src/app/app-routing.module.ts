import { AuthGuard } from "./guard/auth.guard";
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "./category/category.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ShoppingComponent } from "./shopping/shopping.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomePageComponent,
    pathMatch: "full"
  },
  {
    path: "shopping",
    component: ShoppingComponent,
    pathMatch: "full"
  },
  {
    path: "category",
    component: CategoryComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
