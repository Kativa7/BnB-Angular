import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
})
export class AddListingComponent  {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
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
console.log(this.form.value)
}  
}
