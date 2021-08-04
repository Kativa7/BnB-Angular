import { Component, Input, OnInit } from '@angular/core';
import Listing from 'src/app/feature/models/Listing';

@Component({
  selector: 'app-catalog-listing',
  templateUrl: './catalog-listing.component.html',
  styleUrls: ['./catalog-listing.component.css']
})
export class CatalogListingComponent implements OnInit {
@Input()
listing!: Listing;
  constructor() { }

  ngOnInit(): void {
  }

}
