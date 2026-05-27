import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  readonly products = this.productService.allProducts;
  readonly categories = this.productService.categories;
  
  selectedCategory = 'All';

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
