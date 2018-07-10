import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormControl, FormGroup , FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user: User = new User();
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email:[null,[Validators.required, Validators.pattern(this.emailPattern)]],
      password:[null,[Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.user);
  }
}
