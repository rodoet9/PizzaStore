import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Menu } from '../../menu.model';
import { MenuService } from '../../../services/menus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-menus-item',
  templateUrl: './menus-item.component.html',
  styleUrls: ['./menus-item.component.css'],
})
export class MenusItemComponent implements OnInit, OnDestroy {
  @Input() menu: Menu;
  @Input() index: number;
  id: number;

  isAuthenticated = false;
  private userSub: Subscription;

  // @Output() menuSelected = new EventEmitter<void>();
  //EventEmitter a fost setat cu void pt ca nu
  // transmite nicio informatie

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }
  //folosita cu EventEmitter
  // onSelected() {
  //   this.menuSelected.emit();
  // }

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  onOrder(item: any) {
    console.log(item);
    this.menuService.selectMenuForOrders(item);
  }

  onDeletePizza() {
    this.menuService.deletePizza(this.index);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
