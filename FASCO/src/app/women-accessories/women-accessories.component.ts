import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Iproduct } from '../iproduct';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-women-accessories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './women-accessories.component.html',
  styleUrl: './women-accessories.component.css'
})
export class WomenAccessoriesComponent implements OnInit{
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
          (p:Iproduct) => {
          return p.product_category &&
                 p.product_category.name &&
                 p.product_category.name === 'Automotive Parts';

          }
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
