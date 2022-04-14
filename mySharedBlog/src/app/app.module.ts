import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { environment } from '../environments/environment';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthService } from "./services/auth.service";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CardComponent } from './pages/posts/card/card.component';
import { CreatePostComponent } from './pages/posts/create-post/create-post.component';
import { PostService } from './services/post.service';
import { EditPostComponent } from './pages/posts/edit-post/edit-post.component';
import { HomeCardComponent } from './pages/posts/home-card/home-card.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignInComponent, 
    SignUpComponent,
    PageNotFoundComponent,
    PostsComponent,
    CardComponent,
    CreatePostComponent,
    EditPostComponent,
    HomeCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    AppRoutingModule, 
  ],
  providers: [
    AuthService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
