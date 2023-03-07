import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Menu } from '../menu.model';
import { MenuService } from '../../services/menus.service';

@Component({
  selector: 'app-menus-detail',
  templateUrl: './menus-detail.component.html',
  styleUrls: ['./menus-detail.component.css'],
})
export class MenusDetailComponent implements OnInit {
 menu: Menu;
 id: number;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.menu = this.menuService.getMenu(this.id);
      }
    );
  }

  // onModify() {
  //   this.menuService.modifyIngredients(this.menu.ingredients);
  // }
  onEditPizza() {
    this.router.navigate(['edit'], { relativeTo: this.route})
  }
}
// onNewPizza() {
//   this.router.navigate(['new'], { relativeTo: this.route });
// }
