import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultViewComponent } from './pages/default-view/default-view.component';
// import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: DefaultViewComponent,
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  {
    path: 'bloger',
    loadChildren: () => import('./bloger/bloger.module').then(m => m.BlogerModule)
  },
  {
    path: 'login',
    component: LoginComponent
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
