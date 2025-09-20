import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../iproduct';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-men-accessories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './men-accessories.component.html',
  styleUrl: './men-accessories.component.css'
})
export class MenAccessoriesComponent {
_products: Iproduct[] = [];
  displayedProducts: Iproduct[] = [];
  productsPerLoad: number = 12;
  currentLoadCount: number = 12;
  initialLoadCount: number = 12;

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this._ProductsService.GetProduct().subscribe({
      next: (res) => {
        // Filter only women accessories
        this._products = res.filter(
          (p:Iproduct) => p.product_category?.name === 'Furniture'
        );
        this.displayedProducts = this._products.slice(0, this.productsPerLoad);
      },
      error: (err) => console.log(err)
    });
  }

  showMoreProducts(): void {
    this.currentLoadCount += this.productsPerLoad;
    this.displayedProducts = this._products.slice(0, this.currentLoadCount);
  }

  showLessProducts(): void {
    this.currentLoadCount = this.initialLoadCount;
    this.displayedProducts = this._products.slice(0, this.initialLoadCount);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  hasMoreProducts(): boolean {
    return this.displayedProducts.length < this._products.length;
  }

  canShowLess(): boolean {
    return this.displayedProducts.length > this.initialLoadCount;
  }

}
