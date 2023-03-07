import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { MenuService } from '../services/menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
  providers: [MenuService],
})
export class MenusComponent implements OnInit {
  selectedMenu: Menu;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.menuSelected.subscribe(
      (menu: Menu) => {
      this.selectedMenu = menu;
    });
  }
}
