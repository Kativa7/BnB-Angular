import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogService } from '../../../core/services/catalog.service';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
})
export class AddListingComponent  {
  form: FormGroup;
  constructor(private fb: FormBuilder, private catalogService: CatalogService, private router: Router) {
    
    this.form = this.fb.group({
title: ['', [Validators.required]],
location: ['', [Validators.required]],
img: ['', [Validators.required, Validators.pattern('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?')]],
price: ['',[ Validators.required, Validators.min(0.01)]],
category: ['', [Validators.required]],
description: ['', [ Validators.maxLength(200)]],
    });
  }

add(){
  const {title, location, img, price, category, description} = this.form.value;
  this.catalogService.addListing({title, location, img, price, category, description}).subscribe({
    next: () => {
  
      this.router.navigate(['/profile'])
    },
    error: (err) => {
      console.error(err)
    }
  });
}  
}
