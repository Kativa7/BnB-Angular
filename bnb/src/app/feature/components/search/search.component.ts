import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Listing from 'src/app/core/models/Listing';
import { CatalogService } from '../../../core/services/catalog.service';

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
