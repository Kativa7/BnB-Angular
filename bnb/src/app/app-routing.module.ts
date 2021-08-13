import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { AddListingComponent } from './feature/components/add-listing/add-listing.component';
import { CatalogComponent } from './feature/components/catalog/catalog.component';
import { EditListingComponent } from './feature/components/edit-listing/edit-listing.component';
import { ListingDetailsComponent } from './feature/components/listing-details/listing-details.component';
import { LoginComponent } from './user/components/login/login.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { RegisterComponent } from './user/components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  {
    path: 'catalog',
    children: [
      { path: '', pathMatch: 'full', component: CatalogComponent },
      { path: 'add', component: AddListingComponent, canActivate: [AuthGuardService] },
      { path: 'edit/:id', component: EditListingComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: ListingDetailsComponent },
  
  ],
  },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
