import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { PostFormComponent } from './app/post-form/post-form.component';
import { FooterComponent } from './app/footer/footer.component';
import { NewsListContentComponent } from './app/news-list-content/news-list-content.component';
import { EditPostComponent } from './app/edit-post/edit-post.component';
import { EditProfileContentComponent } from './app/edit-profile-content/edit-profile-content.component';
import { ChangePasswordContentComponent } from './app/change-password-content/change-password-content.component';
import { RegisterOwnerContentComponent } from './app/register-owner-content/register-owner-content.component';
import { FindRoommateComponent } from './app/find-roommate/find-roommate.component';
import { HomepageComponent } from './app/homepage/homepage.component';
import { LoginComponent } from './app/login/login.component';
import { NewsComponent } from './app/news/news.component';






@NgModule({
  declarations: [
    NavbarComponent,
    PostFormComponent,
    FooterComponent,
    NewsListContentComponent,
    AppComponent,
    EditPostComponent,
    EditProfileContentComponent,
    ChangePasswordContentComponent,
    RegisterOwnerContentComponent,
    FindRoommateComponent,
    HomepageComponent,
    LoginComponent,
    NewsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
