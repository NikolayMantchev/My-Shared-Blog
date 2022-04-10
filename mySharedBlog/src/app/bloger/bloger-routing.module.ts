import { RouterModule } from "@angular/router";
import { BlogerListComponent } from "./bloger-list/bloger-list.component";


import { BlogerProfilePostsComponent } from "./bloger-profile-posts/bloger-profile-posts.component";
import { BlogerProfileComponent } from "./bloger-profile/bloger-profile.component";

// customer/
export const BlogerRoutingModule = RouterModule.forChild([
    {
        path: '',
        pathMatch: 'full',
        component: BlogerListComponent,
    },
    {
        path: ':id',
        // canActivate: [ProfileGuard],
        // resolve: { posts: BlogerPostsResolver },

        component: BlogerProfileComponent,
        children: [
            {
                path: 'posts',
                // resolve: { posts: BlogerPostsResolver },
                component: BlogerProfilePostsComponent
            },
           
        ]
    },

])