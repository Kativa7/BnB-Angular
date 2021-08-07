import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { MaterialModule } from '../material.module';
import { CatalogListingComponent } from './components/catalog-listing/catalog-listing.component';
import { CatalogService } from './services/catalog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';




@NgModule({
  declarations: [
    CatalogComponent,
    AddListingComponent,
    CatalogListingComponent,
    ListingDetailsComponent,
    SearchComponent,
    EditListingComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [CatalogService]
})
export class FeatureModule { }
