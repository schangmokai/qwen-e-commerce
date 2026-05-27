import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products = signal<Product[]>([
    {
      id: 1,
      title: 'Minimalist Wireless Headphones',
      description: 'Premium sound with active noise cancellation and 40h battery life.',
      price: 299,
      rating: 4.8,
      category: 'Audio',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'Smart Watch Pro',
      description: 'Elegant design meets advanced health tracking technology.',
      price: 449,
      rating: 4.9,
      category: 'Wearables',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      title: 'Mechanical Keyboard',
      description: 'Tactile switches with customizable RGB backlighting.',
      price: 189,
      rating: 4.7,
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      title: 'Designer Desk Lamp',
      description: 'Adjustable LED lighting with wireless charging base.',
      price: 159,
      rating: 4.6,
      category: 'Home Office',
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 5,
      title: 'Premium Laptop Stand',
      description: 'Aluminum alloy construction with ergonomic design.',
      price: 89,
      rating: 4.5,
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 6,
      title: 'Noise-Canceling Earbuds',
      description: 'True wireless freedom with studio-quality sound.',
      price: 199,
      rating: 4.7,
      category: 'Audio',
      imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a832?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 7,
      title: 'Ultra-Slim Power Bank',
      description: '20000mAh capacity in a sleek portable design.',
      price: 79,
      rating: 4.4,
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1609560029880-4841f79fa4ca?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 8,
      title: '4K Monitor UltraWide',
      description: 'Immersive viewing experience with HDR support.',
      price: 699,
      rating: 4.9,
      category: 'Displays',
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 9,
      title: 'Ergonomic Mouse',
      description: 'Precision tracking with comfortable grip for all-day use.',
      price: 99,
      rating: 4.6,
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 10,
      title: 'Bluetooth Speaker',
      description: '360° sound with deep bass and waterproof design.',
      price: 129,
      rating: 4.5,
      category: 'Audio',
      imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 11,
      title: 'Smart Home Hub',
      description: 'Control all your devices from one elegant centerpiece.',
      price: 179,
      rating: 4.7,
      category: 'Smart Home',
      imageUrl: 'https://images.unsplash.com/photo-1558002038-10917738179d?w=600&auto=format&fit=crop&q=60'
    },
    {
      id: 12,
      title: 'Wireless Charging Pad',
      description: 'Fast charging for all Qi-enabled devices.',
      price: 49,
      rating: 4.3,
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1586953229671-e28180e54605?w=600&auto=format&fit=crop&q=60'
    }
  ]);

  readonly allProducts = computed(() => this.products());
  
  readonly categories = computed(() => {
    const products = this.products();
    return Array.from(new Set(products.map(p => p.category)));
  });

  getProductsByCategory(category: string): Product[] {
    if (category === 'All') {
      return this.products();
    }
    return this.products().filter(p => p.category === category);
  }

  getProductById(id: number): Product | undefined {
    return this.products().find(p => p.id === id);
  }
}
