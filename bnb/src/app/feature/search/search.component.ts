import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Listing from 'src/app/models/Listing';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchedListings!: Listing[];
  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const query = this.route.snapshot.queryParams['search'];
    console.log( query)
    this.catalogService.searchListing(query).subscribe(data => {
      this.searchedListings = data
    })
  }
}
