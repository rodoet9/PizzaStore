import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../common/ingredient.model';
import { YourOwnPizzaService } from '../services/your-own-pizza.service';

@Component({
  selector: 'app-your-own-pizza',
  templateUrl: './your-own-pizza.component.html',
  styleUrls: ['./your-own-pizza.component.css'],
})
export class YourOwnPizzaComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private yopService: YourOwnPizzaService) {}

  ngOnInit(): void {
    this.ingredients = this.yopService.getIngredients();
    this.igChangeSub = this.yopService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
