import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../products.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-discount-deals',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './discount-deals.component.html',
  styleUrl: './discount-deals.component.css'
})
export class DiscountDealsComponent {
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
          (p:Iproduct) => p.product_category?.name === 'Art and Crafts'
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
