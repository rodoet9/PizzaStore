import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeMenuItems } from '../home/home-menu/home-menu.model';

@Injectable()
export class HomeMenuService {
  private HomeMenuItems: HomeMenuItems[] = [
    new HomeMenuItems(
      'Chicago dog',
      '$4.5 | 9.5 | 198',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'SPINACH FETA PESTO',
      '$3.5 | 5.5 | 178',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'Margherita',
      '$4.5 | 9.5 | 128',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'Tomato pesto',
      '$4.5 | 9.5 | 137',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'Dimo florentine',
      '$7.5 | 8.5 | 158',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'Tomato pesto',
      '$4.5 | 9.5 | 198',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'The Diana Ross',
      '$3.5 | 5.5 | 178',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'The Mary Wilson',
      '$4.5 | 9.5 | 128',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'Pepperoni',
      '$4.5 | 9.5 | 137',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
    new HomeMenuItems(
      'Pep Sausage',
      '$7.5 | 8.5 | 158',
      'All beef hot dog, pickles, red onion, pepperoncini, and tomato.'
    ),
  ];

  homeMenuChangedItems = new BehaviorSubject<HomeMenuItems[]>([]);

  constructor() {
    this.homeMenuChangedItems = new BehaviorSubject<HomeMenuItems[]>(
      this.HomeMenuItems
    );
  }

  getHomeMenuItems() {
    return this.homeMenuChangedItems.asObservable();
  }
}
