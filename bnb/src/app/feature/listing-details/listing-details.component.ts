import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Listing from 'src/app/models/Listing';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent implements OnInit {
  id!: string;
  listing!: Listing;
  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.catalogService
      .getListingById(this.id)
      .subscribe((data) => (this.listing = data));
  }
}
