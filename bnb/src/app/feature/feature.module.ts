import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    CatalogComponent,
    AddListingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: []
})
export class FeatureModule { }
