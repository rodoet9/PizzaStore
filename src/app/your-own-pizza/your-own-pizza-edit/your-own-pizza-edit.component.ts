import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { YourOwnPizzaService } from '../../services/your-own-pizza.service';

@Component({
  selector: 'app-your-own-pizza-edit',
  templateUrl: './your-own-pizza-edit.component.html',
  styleUrls: ['./your-own-pizza-edit.component.css'],
})
export class YourOwnPizzaEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  //trebuie sa ii dam valoarea de la local refference
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ketchups = ['classic', 'spicy'];
  // yourPizza: FormGroup;

  public ingredients: any[] = [
    { description: 'Olives', value: 'olives' },
    { description: 'Mushrooms', value: 'mushrooms' },
    { description: 'Ham', value: 'ham' },
    { description: 'Mozzarella', value: 'mozzarella' },
  ];

  constructor(private yopService: YourOwnPizzaService) {}

  yourPizza = new FormGroup({
    pizzaName: new FormControl('', Validators.required),
    ingredients: new FormControl('', Validators.required),
    ketchups: new FormControl('', Validators.required),
    additionalNotes: new FormControl(null),
  });

  ngOnInit(): void {
    
  }



  onSubmit() {
    console.log(this.yourPizza);
    this.yourPizza.reset();
  }


  onReset() {
    this.yourPizza.reset();
  }

  // onAddItem() {
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   // this,this.ingredientAdded.emit(newIngredient);

  //   this.yopService.addIngredient(newIngredient);
  // }
}
