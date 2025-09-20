import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../iproduct';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent implements OnInit{
  checkoutForm!: FormGroup;
  product!: Iproduct | null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      postalCode: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(16)]),
      expiry: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cardHolder: new FormControl('', Validators.required),
    });

    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.fetchProduct(productId);
    }
  }

  fetchProduct(id: string) {
    this.productsService.GetProduct().subscribe({
      next: (products: Iproduct[]) => {
        this.product = products.find(p => p.id === id) || null;
        console.log('Fetched product:', this.product);
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      }
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log('Order placed ✅', this.checkoutForm.value, this.product);
      alert('Order placed successfully!');
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }


}
