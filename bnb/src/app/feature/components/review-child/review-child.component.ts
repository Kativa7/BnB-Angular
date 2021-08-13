import { Component, Input, OnInit } from '@angular/core';
import Review from 'src/app/core/models/Review';

@Component({
  selector: 'app-review-child',
  templateUrl: './review-child.component.html',
  styleUrls: ['./review-child.component.css']
})
export class ReviewChildComponent implements OnInit {
 @Input() review!: Review;
  constructor() { }

  ngOnInit(): void {
  }

}
