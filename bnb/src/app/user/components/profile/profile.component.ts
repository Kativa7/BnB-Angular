import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/feature/services/catalog.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  hotels: [] | undefined;
  myHotels: [] | undefined;
  constructor(
    private catalogService: CatalogService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('currentUser');
    this.user = JSON.parse(this.user);
    this.hotels = this.user.booked;
    
    console.log(this.user);
  }





  openDetails(id: number) {
    this.catalogService.getListingById(id).subscribe({
      next: () => {
        this.router.navigate([`/catalog/${id}`]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  showDetails(id: number) {
    // this.catalogService.getAll().filter(h => h.owner === id)
  }
}
