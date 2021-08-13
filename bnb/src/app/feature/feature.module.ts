import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { MaterialModule } from '../material.module';
import { CatalogListingComponent } from './components/catalog-listing/catalog-listing.component';
import { CatalogService } from '../core/services/catalog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingDetailsComponent } from './components/listing-details/listing-details.component';
import { RouterModule } from '@angular/router';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewChildComponent } from './components/review-child/review-child.component';




@NgModule({
  declarations: [
    CatalogComponent,
    AddListingComponent,
    CatalogListingComponent,
    ListingDetailsComponent,
    EditListingComponent,
    ReviewsComponent,
    ReviewChildComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: []
})
export class FeatureModule { }
