import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogerListComponent } from './bloger-list/bloger-list.component';
import { BlogerListItemComponent } from './bloger-list-item/bloger-list-item.component';
import { RouterModule } from '@angular/router';
import { BlogerProfileComponent } from './bloger-profile/bloger-profile.component';
import { BlogerProfilePostsComponent } from './bloger-profile-posts/bloger-profile-posts.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BlogerRoutingModule } from './bloger-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    BlogerListComponent,
    BlogerListItemComponent,
    BlogerProfileComponent,
    BlogerProfilePostsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    BlogerRoutingModule,
    SharedModule,
    CoreModule,
  ],
  exports: [
    BlogerListComponent
  ]
})
export class BlogerModule { }
