import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;
  genders: any[];

  constructor() {
    this.genders = [
      'male', 'female'
    ];
    this.myForm = new FormGroup({
      'name': new FormControl('Adeel', [Validators.required, this.exampleValidator]),
      'email': new FormControl('', [
        Validators.required, 
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      'password': new FormControl('', Validators.required),
      'sex': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required, this.asyncExampleValidator)
      ]),
    });
  }

  ngOnInit() {
  }

  exampleValidator (control: FormControl): {[s: string]: boolean} {
    // Only return true if you want the validation to fail else return null;
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }

  asyncExampleValidator (control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>(
        (resolve, reject) => {
          setTimeout(() => {
            if (control.value === 'Example') {
              resolve({'invalid': true});
            } else {
              resolve(null);
            }
          }, 1500);
        }
    );
    return promise;
  }
  
  onAddHobby () {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }

  onSubmit () {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }

}
