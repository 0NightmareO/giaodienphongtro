import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './post_for_rent/menu/menu.component';
import { NavbarComponent } from './post_for_rent/navbar/navbar.component';
import { PostFormComponent } from './post_for_rent/post-form/post-form.component';
import { FooterComponent } from './post_for_rent/footer/footer.component';
import { FindRoommateBaseComponent } from './find_roommate/find-roommate-base/find-roommate-base.component';
import { FindFormComponent } from './find_roommate/find-form/find-form.component';
import { NewsListBaseComponent } from './news-list/news-list-base/news-list-base.component';
import { NewsListContentComponent } from './news-list/news-list-content/news-list-content.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post/edit-post.component';
import { EditPostBaseComponent } from './edit-post/edit-post-base/edit-post-base.component';

const routes: Routes = [
  { path: 'find-roommate', component: FindRoommateBaseComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    PostFormComponent,
    FooterComponent,
    FindRoommateBaseComponent,
    FindFormComponent,
    NewsListBaseComponent,
    NewsListContentComponent,
    EditPostComponent,
    EditPostBaseComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
