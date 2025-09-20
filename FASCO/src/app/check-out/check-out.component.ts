import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    // ✅ build form with validation
    this.checkoutForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.minLength(16)]],
      expiry: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
      cardHolder: ['', Validators.required],
    });

    // ✅ get product id from route
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.fetchProduct(productId);
    }
  }

  // ✅ Fetch product from API using service
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
