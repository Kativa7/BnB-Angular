import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { MaterialModule } from '../material.module';
import { CatalogListingComponent } from './catalog-listing/catalog-listing.component';
import { CatalogService } from './services/catalog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    CatalogComponent,
    AddListingComponent,
    CatalogListingComponent,
    ListingDetailsComponent,
    SearchComponent,
    FilterPipe
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
