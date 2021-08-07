import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { AddListingComponent } from './feature/components/add-listing/add-listing.component';
import { CatalogComponent } from './feature/components/catalog/catalog.component';
import { EditListingComponent } from './feature/components/edit-listing/edit-listing.component';
import { ListingDetailsComponent } from './feature/components/listing-details/listing-details.component';
import { SearchComponent } from './feature/search/search.component';
import { LoginComponent } from './user/components/login/login.component';
import { ProfileComponent } from './user/components/profile/profile.component';
import { RegisterComponent } from './user/components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'catalog',
    children: [
      { path: '', pathMatch: 'full', component: CatalogComponent },
      { path: 'add', component: AddListingComponent },
      { path: 'edit/:id', component: EditListingComponent },
      { path: ':id', component: ListingDetailsComponent },
      { path: 'search', component: SearchComponent }
  
  ],
  },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
