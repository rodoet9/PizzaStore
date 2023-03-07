import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MenuService } from '../services/menus.service';
import { Menu } from '../menus/menu.model';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ReviewService } from '../services/review.service';
import { ReviewModel } from '../menus/menu-welcome/review.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private menuService: MenuService,
    private authService: AuthService,
    private reviewService: ReviewService
  ) {}

  //metoda buna de PUT
  storePizza() {
    // const testPizza = [];
    const menuPizza = this.menuService.getMenus();
    // console.log(menuPizza);
    return this.http.put(
      'https://pizzacreator-46348-default-rtdb.europe-west1.firebasedatabase.app/menusPizza.json',
      menuPizza
    );
  }

  fetchMenuPizza() {
    return this.http
      .get(
        'https://pizzacreator-46348-default-rtdb.europe-west1.firebasedatabase.app/menusPizza.json'
      )
      .pipe(
        map((menuPizza) => {
          let menuPizzaArray: Menu[] = [];
          let menuPizzaObject = Object.keys(menuPizza);

          for (let i = 0; i < menuPizzaObject.length; i++) {
            menuPizzaArray.push(menuPizza[menuPizzaObject[i]]);
            menuPizzaArray[i].key = menuPizzaObject[i];
          }

          return menuPizzaArray.map((pizza) => {
            return {
              ...pizza,
            };
          });
        }),
        tap((menuPizza) => {
          this.menuService.setMenuPizza(menuPizza);
          // console.log(menuPizza)
        })
      );
  }

  storeReviews() {
    const reviews = this.reviewService.getReviews();

    this.http
      .put(
        'https://pizzacreator-46348-default-rtdb.europe-west1.firebasedatabase.app/reviews.json',
        reviews
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  // fetchMenus() {
  //   return this.authService.user.pipe(
  //     take(1),
  //     exhaustMap((user) => {
  //       return this.http.get<Menu[]>(
  //         'https://pizzacreator-46348-default-rtdb.europe-west1.firebasedatabase.app/menus.json',
  //         {
  //           params: new HttpParams().set('auth', user.token),
  //         }
  //       );
  //     }),
  //     map((menus) => {
  //       console.log(Object.keys(menus)); //pun in array

  //       let menuArray: Menu[] = [];
  //       let menusObject = Object.keys(menus); //face un array cu proprietatile lui

  //       for (let i = 0; i < menusObject.length; i++) {
  //         menuArray.push(menus[menusObject[i]]); // iau valoarea si o adaug in array
  //       }

  //       console.log(menuArray);
  //       return menuArray.map((menu) => {
  //         return {
  //           ...menu,
  //           pizza: menu.name ? menu.name : [],
  //         };
  //       });
  //     }),
  //     tap((menus) => {
  //       console.log('menus', menus);
  //       this.menuService.setMenus(menus);
  //     })
  //   );
  // }

  fetchReviews() {
    return this.http
      .get<ReviewModel[]>(
        'https://pizzacreator-46348-default-rtdb.europe-west1.firebasedatabase.app/reviews.json'
      )
      .pipe(
        map((reviews) => {
          let reviewsArray: ReviewModel[] = [];
          let reviewObject = Object.keys(reviews); //face un array cu proprietatile lui

          for (let i = 0; i < reviewObject.length; i++) {
            reviewsArray.push(reviews[reviewObject[i]]); // iau valoarea si o adaug in array
            reviewsArray[i].key = reviewObject[i];
          }

          //console.log(bouquetArray);
          return reviewsArray.map((review) => {
            return {
              ...review,
            };
          });
        }),
        tap((reviews) => {
          this.reviewService.setReviews(reviews);
        })
      );
  }
}
