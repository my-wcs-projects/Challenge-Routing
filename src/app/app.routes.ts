import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'signup', component: ContactComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', component: UserProfileComponent },
];

export { ROUTES };
