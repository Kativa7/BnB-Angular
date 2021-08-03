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
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
