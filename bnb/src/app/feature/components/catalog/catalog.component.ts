import { Component, OnInit, Query, ViewChild } from '@angular/core';
import Listing from 'src/app/core/models/Listing';
import { CatalogService } from '../../../core/services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  listingName!: string;
  allListings: Array<Listing> | undefined;
  pageSize: number = 5;
  currentPage: number = 1;
  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService.getAll().subscribe((data) => {
      this.allListings = data;
    });
  }

  changePage(page: any){
    this.currentPage = page;
  }
}
