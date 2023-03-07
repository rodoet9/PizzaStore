// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MenuService } from 'app/services/menus.service';

// @Component({
//   selector: 'app-menus-edit',
//   templateUrl: './menus-edit.component.html',
//   styleUrls: ['./menus-edit.component.css'],
// })
// export class MenusEditComponent implements OnInit {
//   constructor( private menuService: MenuService) {}

//   addPizzaForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     imagePath: new FormControl('', Validators.required),
//     description: new FormControl('', Validators.required),
//   });

//   ngOnInit(): void {}

//   // onNewPizza() {
//   //   // this.router.navigate(['new'], { relativeTo: this.route });
//   // }

//   onSubmit() {
//     // this.menuService.addPizzaMenu(this.addPizzaForm.value);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'app/common/data-storage.service';
import { MenuService } from 'app/services/menus.service';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menus-edit',
  templateUrl: './menus-edit.component.html',
  styleUrls: ['./menus-edit.component.css'],
})
export class MenusEditComponent implements OnInit {
  addPizzaForm: FormGroup;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private dataStorageService: DataStorageService
  ) {}

  private initForm() {
    let name = '';
    let imagePath = '';
    let description = '';
    let calories = '';
    let carbohydrates = '';
    let squirrels = '';
    let fats = '';

    this.addPizzaForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      calories: new FormControl(calories),
      carbohydrates: new FormControl(carbohydrates),
      squirrels: new FormControl(squirrels),
      fats: new FormControl(fats),
    });
  }

  onSave() {
    let menu: Menu = new Menu('', '', '', 0, 0, 0, 0);
    menu.name = this.addPizzaForm.get('name').value;
    menu.imagePath = this.addPizzaForm.get('imagePath').value;
    menu.description = this.addPizzaForm.get('description').value;
    menu.calories = this.addPizzaForm.get('calories').value;
    menu.carbohydrates = this.addPizzaForm.get('carbohydrates').value;
    menu.squirrels = this.addPizzaForm.get('squirrels').value;
    menu.fats = this.addPizzaForm.get('fats').value;
    console.log('click');

    this.dataStorageService.storePizza();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.initForm();
    });
  }

  // onNewPizza() {
  //   // this.router.navigate(['new'], { relativeTo: this.route });
  // }

  onSubmit() {
    this.menuService.addPizzaMenu(this.addPizzaForm.value);
  }
}
