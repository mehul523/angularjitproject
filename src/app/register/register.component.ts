import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  regForm=new FormGroup({
       firstname: new  FormControl(''),
       lastname: new  FormControl(''),
       mobileno: new  FormControl(''),
       email: new  FormControl(''),
       password: new  FormControl(''),

  })
    
  collectdata() {
          console.warn(this.regForm.value);
  }

}
