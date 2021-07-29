import { Component, OnInit } from '@angular/core';
import Listing from 'src/app/models/Listing';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  allListings: Array<Listing> | undefined;
  single: any;
  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getAll().subscribe(data =>{
      this.allListings = data;
      this.single = this.allListings[0];
    })
  }

}
