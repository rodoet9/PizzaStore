import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu.model';
import { MenuService } from '../../services/menus.service';
import { DataStorageService } from 'app/common/data-storage.service';

@Component({
  selector: 'app-menus-list',
  templateUrl: './menus-list.component.html',
  styleUrls: ['./menus-list.component.css'],
})
export class MenusListComponent implements OnInit {
  // @Output() menuWasSelected = new EventEmitter<Menu>();
  menus: Menu[];

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit(): void {
    // this.menuService.getMenus().subscribe((result) => {
    //   this.menus = result;
    //   //   console.log(this.menus);
    // });

    this.menus = this.menuService.getMenus();

    
      this.dataStorage.fetchMenuPizza().subscribe((result) => {
        this.menus = result;
        this.menuService.setMenuPizza(result)
        this.dataStorage.storePizza().subscribe((response) => {
      });
    });
  }

  // onMenuSelected(menu: Menu) {
  //   this.menuWasSelected.emit(menu);
  // }
}
