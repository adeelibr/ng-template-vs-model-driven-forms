import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  form: any;
  options = [
    {
      value:'Option 1', 
      text: 'This Option Might Not Right, Because It Was Mysteriously Selected Before'
    },
    {
      value:'Option 2', 
      text: 'Something Odly Seems Very Choosable About This Option, Might Have Something To Do With A Horcux'
    }
  ];

  constructor () {
    this.form = {
      name: 'Adeel',
      email: 'adeelimranr@gmail.com',
      rate: '',
      option: 'Option 1',
    };
  }

  ngOnInit() {
  }
  
  onSubmit (formBody: NgForm) {
    // console.log(formBody);
    // console.log(formBody.value);
    console.log(this.form);
  }

}
