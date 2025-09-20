import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

interface Hotspot {
  id: number;
  label: string;
  x: number;
  y: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 selectedSize: string = 'M';

  hotspots: Hotspot[] = [
    { id: 1, label: 'Flat Cap', x: 60, y: 15 },
    { id: 2, label: 'Suspender', x: 20, y: 35 },
    { id: 3, label: 'Hugo Boss', x: 55, y: 45 },
    { id: 4, label: 'Hugo Boss', x: 20, y: 60 },
    { id: 5, label: 'Santoni', x: 55, y: 85 }
  ];

  sizes: string[] = ['S', 'M', 'L', 'XL'];

  product = {
    collection: 'Women Collection',
    name: 'Peaky Blinders',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis.',
    price: 100.00,
    image: '/assets/peakey.png' // Update with your image path
  };

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  onBuyNow(): void {
    console.log('Buy now clicked for size:', this.selectedSize);
    // Implement buy now logic
  }

  onHotspotClick(hotspot: Hotspot): void {
    console.log('Hotspot clicked:', hotspot.label);
    // Implement hotspot click logic
  }
}
