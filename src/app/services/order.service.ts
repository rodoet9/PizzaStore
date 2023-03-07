import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class OrderService {
  // menuSelected = new EventEmitter<Menu>();
  order: BehaviorSubject<any[]>;

  constructor() {
     this.order = new BehaviorSubject<any[]>([
      {
        id: 1,
        quantity: 1,
        size: 24,
        pizza: {
          name: 'Pizza diavola',
          desc: 'string',
          imagePath: 'string',
          ingredients: [
            {
              name: 'olives',
              amount: '10',
            },
          ],
        },
      },
   ]);
  }
  addToCart(pizza: any, quantity: any, size: any) {
    this.order.value.push({
      id: Date.now(),
      quantity: quantity,
      size: size,
      pizza: pizza,
    });
    this.order.next(this.order.value);
  }
  getOrders() {
    return this.order.asObservable();
  }

  deleteFromCart(id: any) {
    for (let o of this.order.value) {
      if (o.id == id) {
        this.order.value.splice(this.order.value.indexOf(o), 1);
      }
    }
    this.order.next(this.order.value);
  }
}
