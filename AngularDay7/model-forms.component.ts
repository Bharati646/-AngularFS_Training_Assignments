import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css'],
})
export class ModelFormsComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    fname: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('\\d{10}'),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    regNo: new FormControl('', [
      Validators.maxLength(10),
      Validators.pattern(
        '(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})'
      ),
    ]),

    address: new FormControl('', Validators.required),
    model: new FormControl('', Validators.pattern('\\d{10}')),
    colors: new FormControl('', Validators.required),
    year: new FormControl(
      '',
      Validators.pattern('(20[0-1][0-9]|20[0-2][0-1]|2022)')
    ),
    pincode: new FormControl('', Validators.pattern('\\d{6}')),
  });

  constructor() {}

  ngOnInit(): void {}

  public submit_click(): void {
    // ajax call to send data to server
    alert('Customer Details are registered.');
    let customerObj = this.customerForm.value;
    console.log(customerObj);
  }
}
