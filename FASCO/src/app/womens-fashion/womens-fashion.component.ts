import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../iproduct';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-womens-fashion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './womens-fashion.component.html',
  styleUrl: './womens-fashion.component.css'
})
export class WomensFashionComponent implements OnInit{
  _products: Iproduct[] = [];
  displayedProducts: Iproduct[] = [];
  productsPerLoad: number = 12;
  currentLoadCount: number = 12;
  initialLoadCount: number = 12;

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this._ProductsService.GetProduct().subscribe({
      next: (res) => {
        // Filter only women accessories with safe null checking
        this._products = res.filter((p: Iproduct) => {
          return p.product_category &&
                 p.product_category.name &&
                 p.product_category.name === 'Toys';
        });
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

  // Helper method for safe category access
  getCategoryName(product: Iproduct): string {
    return product.product_category?.name || 'No Category';
  }

}
