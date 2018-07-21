

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

/*Modulos*/
import { PostsComponent } from './posts/posts.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { HomeComponent } from './home/home.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const App_Routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'posts/:id', component: PostEditComponent,
  },
  {
    path: 'profile', component: AccountComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  { path: '**', component: PageNoFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);