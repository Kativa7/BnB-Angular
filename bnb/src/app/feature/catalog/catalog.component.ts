import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Listing from 'src/app/models/Listing';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  allListings: Array<Listing> | undefined;
  @ViewChild('form') searchForm!: NgForm;
  constructor(private catalogService: CatalogService,
    private router: Router) {}

  ngOnInit() {
    this.catalogService.getAll().subscribe((data) => {
      this.allListings = data;
    });
  }
  search() {
    const query = this.searchForm.value.query;
    this.router.navigate(['/catalog/search'], {queryParams: {search: query}})
  }
}
