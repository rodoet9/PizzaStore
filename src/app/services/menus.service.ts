import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../common/ingredient.model';
import { YourOwnPizzaService } from './your-own-pizza.service';
import { Menu } from '../menus/menu.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MenuService {
  // menuSelected = new EventEmitter<Menu>();
  menuSelected = new Subject<Menu>();
  selectedMenu: any;

   private menus: Menu[] =[];
  // private menus: Menu[] = [
  //   new Menu(
  //     'Pizza Quattro Stagioni',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  //     'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-1a.jpg',
  //     800,
  //     20,
  //     30,
  //     50
  //   ),
  //   new Menu(
  //     'Pizza Diavola',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  //     'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-2a.jpg',
  //     200,
  //     35,
  //     15,
  //     50
  //   ),
  //   new Menu(
  //     'Pizza Capricciosa',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  //     'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-3a.jpg',
  //     850,
  //     20,
  //     20,
  //     50
  //   ),
  //   new Menu(
  //     'Pizza ConPollo',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  //     'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-4a.jpg',
  //     500,
  //     55,
  //     30,
  //     50
  //   ),
  //   new Menu(
  //     'Pizza Taraneasca',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  //     'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-5a.jpg',
  //     700,
  //     40,
  //     30,
  //     50
  //   ),
  //   new Menu(
  //     'Pizza Margherita',
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  //     'https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-6a.jpg',
  //     600,
  //     80,
  //     30,
  //     50
  //   ),
  // ];
  menusChanged = new BehaviorSubject<Menu[]>([]);

  constructor(private yopService: YourOwnPizzaService) {
    this.menusChanged = new BehaviorSubject<Menu[]>(this.menus);
  }

  setMenuPizza(menuPizza) {
    console.log(menuPizza)
    this.menusChanged.value.splice(0, this.menusChanged.value.length);
    this.menusChanged.value.push(...menuPizza);
    this.menusChanged.next(this.menusChanged.value);
  }

  setMenus(menus: Menu[]) {
    this.menusChanged.value.splice(0, this.menusChanged.value.length);
    this.menusChanged.value.push(...menus);
    this.menusChanged.next(this.menusChanged.value);
  }

  getMenus() {
    return this.menusChanged.value;

  }

  getMenu(index: number) {
    return this.menus[index];
  }

  modifyIngredients(ingredients: Ingredient[]) {
    this.yopService.addIngredients(ingredients);
  }

  selectMenuForOrders(menu: Menu) {
    this.selectedMenu = this.menus.indexOf(menu);
    let indexMenu = this.menus.indexOf(menu);
    localStorage.setItem('selectedMenu', indexMenu.toString());
  }

  getSelectedMenu() {
    // return this.menus[this.selectedMenu];
    let item = localStorage.getItem('selectedMenu');
    return this.menus[item];
  }

  sendItemToCart(menu: Menu[]) {}

  deletePizza(index: number) {
    this.menusChanged.value.splice(index, 1);
    this.menusChanged.next(this.menusChanged.value);
  }

  updatePizzaMenu(index: number, newMenu: Menu) {
    this.menus[index] = newMenu;
    this.menusChanged.next(this.menus.slice());
  }
  addPizzaMenu(menu: Menu) {
    this.menus.push(menu);
    this.menusChanged.next(this.menus.slice());
  }
}
