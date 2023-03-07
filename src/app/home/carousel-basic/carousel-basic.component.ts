import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css'],
})
export class CarouselBasicComponent implements OnInit {
  @ViewChild('carousel') carousel: NgbCarousel;

  constructor() {}

  ngOnInit(): void {}

  onPrev() {
    this.carousel.prev();
  }

  onNext() {
    this.carousel.next();
  }
}
