import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BenvenutoCard } from '../home/benvenuto/benvenuto-card.model';

@Injectable()
export class BenvenutoService {
  private benvenutoCards: BenvenutoCard[] = [
    new BenvenutoCard(
      'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-1.jpg',
      'Order online',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      'Order today'
    ),
    new BenvenutoCard(
      'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-2.jpg',
      'Our menu',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      'Nostro menu'
    ),
    new BenvenutoCard(
      'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-3-2.jpg',
      'Explore kitchen',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.',
      'Explore more'
    ),
  ];

  cardsChanged = new BehaviorSubject<BenvenutoCard[]>([]);

  constructor() {
    this.cardsChanged = new BehaviorSubject<BenvenutoCard[]>(
      this.benvenutoCards
    );
  }

  getBenvenutoCards() {
    return this.cardsChanged.asObservable();
  }
}
