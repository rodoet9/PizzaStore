

export class Ingredient {
  public name: string;
  public amount: number;
  public description: string;
  public value: string;
//alta varianta
//constructor( public name: string, public amount: number)
  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
