import { Component, OnInit} from '@angular/core';
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
  isValid: boolean = true;
  hasBooked!: boolean;

  constructor(
    private catalogService: CatalogService,
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = this.userService.getUserInfo().subscribe(data =>{
      this.user = data; 
    })
    this.catalogService
      .getListingById(this.id)
      .subscribe((data) => (this.listing = data))
 
    }

  bookListing(id: number){
    this.catalogService.bookAListing(id).subscribe({
      next:  () => {
        this.router.navigate(['/profile'])
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
    if (window.confirm('Are you sure you want to delete this listing?')){
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

 
  }


