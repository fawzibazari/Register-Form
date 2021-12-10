import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-register';

  RegisterForm!: FormGroup;
  //deux façon different pour le email validator 
  // emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.RegisterForm = this.formBuilder.group({
    name: [null, [Validators.pattern('[A-Z a-z]{1,100}')]],
    // email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
    email: [null, [Validators.email, Validators.required]],
    password: [null, Validators.required]
  });
}

submit() {
  if (!this.RegisterForm.valid) {
    return;
  }
  console.log(this.RegisterForm.value);
}

}
