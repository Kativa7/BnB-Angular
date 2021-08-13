import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from 'src/app/core/services/catalog.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {

  constructor(private router: Router, private catalogService: CatalogService,   private route: ActivatedRoute,) { }

  postReview(form: NgForm) {
    const { author, content } = form.value;
    const id = this.route.snapshot.params['id'];

    this.catalogService.review(id, { author, content }).subscribe({
      next: () => {
        this.router.navigate([`/catalog`]);
      },
    });
  }

}
