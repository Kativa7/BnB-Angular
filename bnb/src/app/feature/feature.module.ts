import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { MaterialModule } from '../material.module';
import { CatalogListingComponent } from './catalog-listing/catalog-listing.component';
import { CatalogService } from './services/catalog.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatalogComponent,
    AddListingComponent,
    CatalogListingComponent,
    ListingDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [CatalogService]
})
export class FeatureModule { }
