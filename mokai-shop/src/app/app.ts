import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CartService } from './services/cart.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    ProductListComponent,
    CartComponent,
    MatSidenavModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mokai-shop');
  
  private cartService = inject(CartService);
  readonly totalItems = this.cartService.totalItems;
  isCartOpen = signal(false);

  toggleCart(): void {
    this.isCartOpen.update(open => !open);
  }

  closeCart(): void {
    this.isCartOpen.set(false);
  }
}
