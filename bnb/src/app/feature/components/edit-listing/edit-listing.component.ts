import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        'title': [this.listing.title],
        'location': [this.listing.location],
        'img': [this.listing.img],
        'price': [this.listing.price],
        'category': [this.listing.category],
        'description': [this.listing.description],
      });
    });
  }

 edit(){
this.catalogService.editListing(this.id, this.form.value).subscribe({
  next:  () => {
    this.router.navigate(['/catalog'])
  },
  error: (err) => {
    console.error(err)
  }
});
}
}
