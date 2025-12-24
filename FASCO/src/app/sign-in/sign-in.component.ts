import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
 loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6,}$/)
    ])
  });

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;

      localStorage.setItem('user', JSON.stringify(userData));

      this.router.navigate(['/home']);

      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }}
