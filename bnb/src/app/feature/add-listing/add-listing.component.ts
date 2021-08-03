import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogService } from '../services/catalog.service';

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
img: ['', [Validators.required]],
price: ['',[ Validators.required]],
category: ['', [Validators.required]],
description: ['',],
    });
  }

add(){
  const {title, location, img, price, category, description} = this.form.value;
  this.catalogService.addListing({title, location, img, price, category, description}).subscribe({
    next: () => {
      this.router.navigate(['/catalog'])
    },
    error: (err) => {
      console.error(err)
    }
  });
}  
}
