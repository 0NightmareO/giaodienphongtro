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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FooterComponent } from './footer/footer.component';
import { NewsListContentComponent } from './news-list-content/news-list-content.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditProfileContentComponent } from './edit-profile-content/edit-profile-content.component';
import { ChangePasswordContentComponent } from './change-password-content/change-password-content.component';
import { RegisterOwnerContentComponent } from './register-owner-content/register-owner-content.component';
import { FindRoommateComponent } from './find-roommate/find-roommate.component';




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
    FindRoommateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
