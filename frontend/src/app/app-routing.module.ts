import { AuthGuard } from "./guard/auth.guard";
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "./category/category.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
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
