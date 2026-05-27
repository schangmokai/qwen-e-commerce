# Mission : Création d'une Application Web E-Commerce Ultra-Moderne

Tu agis comme un Développeur Front-End Senior expert en Angular et un UI/UX Designer de classe mondiale. Ton objectif est de concevoir le premier jet d'une application de e-commerce (appelée "Mokai Shop") ultra-moderne, épurée et visuellement percutante. 

Pour ce premier jet, l'application fonctionnera à 100% avec des données fictives (fake data) locales de haute qualité. **L'accent absolu doit être mis sur le design, les animations, la fluidité et l'esthétique générale.**

---

### 🛠️ Spécifications Techniques
- **Framework :** Angular (Dernière version stable, architecture basée sur les standalone components et les Signals pour la gestion d'état).
- **UI Framework :** Angular Material (Dernière version).
- **Styles :** SCSS avancé (utilisation de CSS Grid, Flexbox, variables CSS personnalisées pour le thèming).
- **Icônes :** Google Material Symbols (version moderne/outline de Material Icons).

---

### 🎨 Directives de Design (Ultra-Moderne & Premium)
Je veux que le site ressemble à une marque de luxe ou de tech haut de gamme (style Apple, Stripe ou Vercel). Évite le look "générique/brut" d'Angular Material en appliquant ces règles :
- **Minimalisme & Espace :** Beaucoup d'espace blanc (padding/margin généreux), typographie soignée et contrastée.
- **Cartes Produits (Glassmorphism / Border-glow) :** Pas d'ombres lourdes. Utilise des bordures très fines (`1px solid rgba(0,0,0,0.08)` ou mode sombre), des rayons de courbure modernes (`border-radius: 16px` ou `24px`).
- **Micro-interactions :** Effets de hover fluides sur les boutons et les cartes de produits (léger scale-up, transition de couleur douce, apparition d'un bouton "Ajouter au panier" au survol).
- **Thème :** Configure un thème Light/Dark moderne et épuré.

---

### 🖥️ Structure des Pages à Générer (Single Page Application)

1. **Header / Navbar :** 
   - Logo minimaliste, barre de recherche flottante, icône panier avec badge animé (Signal-based), sélecteur de thème.
   - Flou d'arrière-plan au défilement (`backdrop-filter: blur(12px)`).
2. **Hero Section (Page d'accueil) :**
   - Un immense bandeau textuel avec une typographie audacieuse (gradient text).
   - Un bouton d'action (CTA) principal avec un effet de brillance ou une animation de survol unique.
3. **Grille de Produits (Product Catalog) :**
   - Système de filtres latéraux ou supérieurs ultra-propres (Catégories, Prix, Tri) utilisant les puces (`mat-chip-listbox`).
   - Grille responsive (`grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`).
4. **Mini-Panier Latéral (Sidenav Cart) :**
   - Un panneau coulissant (`mat-sidenav`) qui s'ouvre à droite pour afficher le résumé du panier avec un bouton "Passer à la caisse" stylisé.

---

### 📦 Données Fictives (Fake Data Seeding)
Crée un service Angular `ProductService` qui fournit un tableau de 8 à 12 produits fictifs haut de gamme. Chaque produit doit avoir :
- `id`, `title`, `description` (courte et vendeuse), `price`, `rating`, `category`.
- `imageUrl` : Utilise des images de haute qualité provenant d'Unsplash orientées vers un thème précis (ex: Tech minimaliste, Vêtements streetwear premium, ou Mobilier design). *Exemple : https://images.unsplash.com/photo-...*

---

### 🚀 Livrables Attendus
1. **Arborescence** des dossiers et fichiers du projet.
2. Le code des fichiers de configuration globaux (`styles.scss` pour la surcharge du thème Material, `theme.scss`).
3. Le code du `ProductService` avec les fausses données.
4. Les composants principaux : `HeaderComponent`, `HeroComponent`, `ProductListComponent`, `ProductCardComponent`, et `CartComponent`.

Génère une structure propre, modulaire et prête à l'emploi. Focus maximum sur l'effet "Waouh" visuel !
