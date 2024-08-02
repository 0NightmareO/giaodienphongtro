import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { EditProfileContentComponent } from './edit-profile-content/edit-profile-content.component';
import { RegisterOwnerContentComponent } from './register-owner-content/register-owner-content.component';
import { ChangePasswordContentComponent } from './change-password-content/change-password-content.component';
import { NewsListContentComponent } from './news-list-content/news-list-content.component';

const routes: Routes = [
  { path: 'post-for-rent', component: PostFormComponent },
  { path: 'news-list', component: NewsListContentComponent },
  { path: 'edit-profile', component: EditProfileContentComponent },
  { path: 'change-password', component: ChangePasswordContentComponent },
  { path: 'register-owner', component: RegisterOwnerContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
