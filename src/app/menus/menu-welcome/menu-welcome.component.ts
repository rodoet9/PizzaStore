import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu.model';
import { MenuService } from '../../services/menus.service';
import { OrderService } from 'app/services/order.service';

@Component({
  selector: 'app-menu-welcome',
  templateUrl: './menu-welcome.component.html',
  styleUrls: ['./menu-welcome.component.css'],
})
export class MenuWelcomeComponent implements OnInit {
  menu: Menu;
  size: number = 24;
  quantity: number;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {
    this.menu = this.menuService.getSelectedMenu();
  }

  ngOnInit(): void {
    console.log(this.menuService.selectedMenu)
  }

  placeOrder() {
    // this.router.navigate( ['/pizza-cart'] )
    this.orderService.addToCart(this.menu, this.quantity, this.size);
  }

  viewOrders() {
    this.router.navigate(['/orders']);
  }
  onquantityChange(event: any) {
    console.log(event);
  }

  onDesc() {
    this.router.navigate(['desc'], { relativeTo: this.route });
  }

  onInfo() {
    this.router.navigate(['info'], { relativeTo: this.route });}

  onReviews() {
    this.router.navigate(['reviews'], { relativeTo: this.route });}
}
