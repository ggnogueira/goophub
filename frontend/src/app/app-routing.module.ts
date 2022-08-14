import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { ProfileComponent } from './main/profile/profile.component';
import { RegisterComponent } from './main/register/register.component';
import { SearchComponent } from './main/search/search.component';
import { SecureComponent } from './main/secure/secure.component';
import { UploadComponent } from './main/upload/upload.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'secure', pathMatch: 'full' },
  { path: 'secure', canActivate: [ AuthGuardService ], component: SecureComponent },
  { path: 'profile', canActivate: [ AuthGuardService ], component: ProfileComponent },
  { path: 'search', canActivate: [ AuthGuardService ], component: SearchComponent },
  { path: 'upload', canActivate: [ AuthGuardService ], component: UploadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
