import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PostsComponent } from './pages/posts/posts.component';
import {CardComponent} from './pages/posts/card/card.component'
import {CreatePostComponent} from './pages/posts/create-post/create-post.component'
import { EditPostComponent } from './pages/posts/edit-post/edit-post.component';

// route guard
// import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostsComponent ,
  },
  {
    path: 'create-post',
    component: CreatePostComponent ,
  },
  {
    path: 'posts/update-post/:id',
    component: EditPostComponent ,
  },
  {
    path: 'posts/card',
    component: CardComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  { path: 'register-user', 
  component: SignUpComponent 
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
