import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import Listing from '../../models/Listing';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent implements OnInit {
  id!: number;
  listing!: Listing;
  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.catalogService
      .getListingById(this.id)
      .subscribe((data) => (this.listing = data));
  }

  bookListing(id: number){
    this.catalogService.bookAListing(id).subscribe({
      next:  () => {
        this.router.navigate(['/catalog'])
      },
      error: (err) => {
        console.error(err)
      }
    });
  }
}
