import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: "", loadChildren: () => import("./main/main.module").then(m => m.MainModule) },
  {path: "addpost", loadChildren: () => import("./addpost/addpost.module").then(m => m.AddpostModule)},
  { path: "post/:id", loadChildren: () => import("./post/post.module").then(m => m.PostModule) },
  {path: "register", loadChildren: () => import("./signup/signup.module").then(m => m.SignupModule)},
  {path: "user_login", loadChildren: () => import("./login/login.module").then(m => m.LoginModule)}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
