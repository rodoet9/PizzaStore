import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReviewModel } from '../menus/menu-welcome/review.model';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  reviewsChanged = new Subject<ReviewModel[]>();

  reviewSelected = new EventEmitter<ReviewModel>();

  public reviews: ReviewModel[] = [];

  constructor() {}

  setReviews(reviews: ReviewModel[]) {
    this.reviews = reviews;
  }
  getReviews() {
    return this.reviews.slice();
  }

  addReview(form: ReviewModel) {
    this.reviews.push(form);
  }
}
