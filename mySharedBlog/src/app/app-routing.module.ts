import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './pages/header/header.component';

// route guard
// import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'bloger',
  //   loadChildren: () => import('./bloger/bloger.module').then(m => m.BlogerModule) //,canActivate: [AuthGuard]
  // },
 
  {
    path: 'sign-in',
    component: SignInComponent
  },
  { path: 'register-user', 
  component: SignUpComponent 
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
