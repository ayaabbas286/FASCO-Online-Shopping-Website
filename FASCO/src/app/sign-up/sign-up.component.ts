import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
registerForm: FormGroup = new FormGroup(
  {
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[\+]?[1-9][\d]{0,15}$/)
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required
    ])
  },
  { validators: this.confirmPassword }   // 👈 add this line
);

confirmPassword(g: AbstractControl) {
  if (g.get('password')?.value === g.get('confirmPassword')?.value) {
    return null;  // ✅ valid
  } else {
    return { mismatch: true };  // ✅ must return an object
  }
}

 onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Data:', this.registerForm.value);
    }else {
            this.registerForm.markAllAsTouched();

    }
  }
}
