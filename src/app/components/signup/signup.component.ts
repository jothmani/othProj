import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormControl, FormGroup , FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm:FormGroup;
  user: User = new User();
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public formBuilder:FormBuilder) {
    this.userForm = this.formBuilder.group({
      fname:[null,Validators.required],
      lname:[null,Validators.required],
      email:[null,[Validators.required, Validators.pattern(this.emailPattern)]],
      password:[null,[Validators.required, Validators.minLength(8)]],
      confirmPassword:[null,[Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.user = <User>this.userForm.value;
    console.log(this.user);
  }

}
