import { Component, OnInit } from '@angular/core';
import { Menu } from '../menus/menu.model';
import { OrderService } from '../services/order.service';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'app-pizza-cart',
  templateUrl: './pizza-cart.component.html',
  styleUrls: ['./pizza-cart.component.css'],
})
export class PizzaCartComponent implements OnInit {
  menu: Menu[];
  orders: any[];
  alert: boolean = false;
  hideMessage: boolean = false;
  couponCode: string;

  constructor(public orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((response) => {
      this.orders = [...response];
    });
  }

  onCoupon() {
    this.alert = true;
    setTimeout(() => {
      this.hideMessage = true;
    }, 4000);

    this.couponCode = '';
  }
}
