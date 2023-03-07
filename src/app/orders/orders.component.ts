import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  // checkoutForm: FormGroup;
  alert: boolean = false;
  hideMsg: boolean = false;

  constructor() {}

  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    companyName: new FormControl(''),
    country: new FormControl('', Validators.required),
    streetAddress: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    additionalInfo: new FormControl(''),
  });

  ngOnInit(): void {}

  onCheckout() {
    console.log(this.checkoutForm);
  }

  onPlaceOrder() {
    this.alert = true;
    setTimeout(() => {
      this.hideMsg = true;
    }, 7000);

    this.checkoutForm.reset();
  }
}
