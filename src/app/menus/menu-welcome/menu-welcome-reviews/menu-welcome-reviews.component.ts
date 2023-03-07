import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewModel } from '../review.model';
import { ReviewService } from 'app/services/review.service';
import { DataStorageService } from 'app/common/data-storage.service';

@Component({
  selector: 'app-menu-welcome-reviews',
  templateUrl: './menu-welcome-reviews.component.html',
  styleUrls: ['./menu-welcome-reviews.component.css'],
})
export class MenuWelcomeReviewsComponent implements OnInit, OnDestroy {
  currentRate = 3;
  reviewForm: FormGroup;
  reviewsArray: ReviewModel[] = [];
  dataSubscription;
  constructor(
    private reviewService: ReviewService,
    private dataStorageService: DataStorageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      'rating': new FormControl(''),
      'review': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
    });

    this.dataSubscription = this.dataStorageService
      .fetchReviews()
      .subscribe((response) => {
        this.reviewsArray = this.reviewService.getReviews();

        this.cdr.detectChanges();
      });
  }

  onSubmitReview() {
    const newRev = new ReviewModel(
      this.reviewForm.value['rating'],
      this.reviewForm.value['review'],
      this.reviewForm.value['name'],
      this.reviewForm.value['email']
    );
    this.reviewsArray.push(newRev);

    console.log('newRev');
    this.reviewService.addReview(newRev);
    this.dataStorageService.storeReviews();
  }
  ngOnDestroy(): void {}
}
