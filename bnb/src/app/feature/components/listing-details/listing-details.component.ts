import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import Listing from '../../../core/models/Listing';
import { CatalogService } from '../../../core/services/catalog.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent implements OnInit {
  id!: number;
  listing!: Listing;
  user: any;
  listings!: Array<Listing>
  constructor(
    private catalogService: CatalogService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = this.userService.getUser();
    this.user = JSON.parse(this.user);
  }

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

  updateCatalog(){
    this.catalogService.getAll().subscribe(data=>{
      this.listings = data
    })
  }

  deleteListing(id: number) {
    this.catalogService.deleteListing(id).subscribe({
      next:  () => {
        this.updateCatalog();
        this.router.navigate(['/catalog'])
      },
      error: (err) => {
        console.error(err)
      }
    });
  }

  }


