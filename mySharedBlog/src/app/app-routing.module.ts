import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { PostsComponent } from "./pages/posts/posts.component";
import { CardComponent } from "./pages/posts/card/card.component";
import { CreatePostComponent } from "./pages/posts/create-post/create-post.component";
import { EditPostComponent } from "./pages/posts/edit-post/edit-post.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
    },
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "posts",
        component: PostsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "create-post",
        component: CreatePostComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "posts/update-post/:id",
        component: EditPostComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "posts/card",
        component: CardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "sign-in",
        component: SignInComponent,
    },
    { path: "register-user", component: SignUpComponent },
    {
        path: "**",
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
