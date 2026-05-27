import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly items = signal<CartItem[]>([]);

  readonly cartItems = computed(() => this.items());
  
  readonly totalItems = computed(() => {
    return this.items().reduce((sum, item) => sum + item.quantity, 0);
  });

  readonly totalPrice = computed(() => {
    return this.items().reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  });

  addToCart(product: Product): void {
    this.items.update(items => {
      const existingIndex = items.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: number): void {
    this.items.update(items => items.filter(item => item.product.id !== productId));
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.items.update(items => {
      return items.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  }

  clearCart(): void {
    this.items.set([]);
  }
}
