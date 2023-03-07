import { Ingredient } from '../common/ingredient.model';

export class Menu {
  public name: string;
  public description: string;
  public imagePath: string;
  public calories: number;
  public carbohydrates: number;
  public squirrels: number;
  public fats: number;
  public key: string;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    calories: number,
    carbohydrates: number,
    squirrels: number,
    fats: number,
    key?: string
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.calories = calories;
    this.carbohydrates = carbohydrates;
    this.squirrels = squirrels;
    this.fats = fats;
    this.key = key;
  }
}
