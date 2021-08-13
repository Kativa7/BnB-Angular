import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Listing from '../../../core/models/Listing';
import { CatalogService } from '../../../core/services/catalog.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css'],
})
export class EditListingComponent  {
  form!: FormGroup;
  id;
  listing!: Listing;
  constructor(
    private fb: FormBuilder,
    private catalogService: CatalogService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
    this.catalogService.getListingById(this.id).subscribe((data) => {
      this.listing = data;
      this.form = this.fb.group({
        'title': [this.listing.title, [Validators.required]],
        'location': [this.listing.location, [Validators.required]],
        'img': [this.listing.img, [Validators.required, Validators.pattern('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?')]],
        'price': [this.listing.price, [Validators.required, Validators.min(0.01)]],
        'category': [this.listing.category, [Validators.required]],
        'description': [this.listing.description,  [ Validators.maxLength(200)]],
      });
    });
  }

 edit(){
this.catalogService.editListing(this.id, this.form.value).subscribe({
  next:  () => {
    this.router.navigate([`/catalog/${this.id}`])
  },
  error: (err) => {
    console.error(err)
  }
});
}
}
