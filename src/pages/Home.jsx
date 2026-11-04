import { useMemo, useState } from 'react';
import Hero from '../components/Hero.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import { categories, products, getCategoryLabel } from '../data/products.js';
import { startCheckout } from '../lib/checkout.js';
import { scrollToId } from '../lib/scroll.js';

function matches(product, term) {
  if (!term) return true;
  const haystack = [
    product.name,
    product.description,
    getCategoryLabel(product.category),
    ...product.formats,
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(term);
}

export default function Home({ query, onQueryChange, notify }) {
  const [category, setCategory] = useState('all');
  const term = query.trim().toLowerCase();

  const counts = useMemo(() => {
    const searched = products.filter((p) => matches(p, term));
    const result = { all: searched.length };
    categories.forEach((c) => {
      if (c.id !== 'all') result[c.id] = searched.filter((p) => p.category === c.id).length;
    });
    return result;
  }, [term]);

  const visible = useMemo(
    () =>
      products.filter(
        (p) => (category === 'all' || p.category === category) && matches(p, term)
      ),
    [category, term]
  );

  const buy = (product) => startCheckout(product, notify);

  const selectFromHero = (id) => {
    setCategory(id);
    scrollToId('products');
  };

  const reset = () => {
    setCategory('all');
    onQueryChange('');
  };

  return (
    <main>
      <Hero products={products} categories={categories} onSelectCategory={selectFromHero} />

      <section id="products" className="section products">
        <div className="container">
          <header className="section-head">
            <h2>Explore Our Products</h2>
            <p>
              Video packs, design assets, developer tools and courses. Filter by category or
              search by name or file format.
            </p>
          </header>

          <div className="products__toolbar">
            <CategoryFilter
              categories={categories}
              active={category}
              counts={counts}
              onChange={setCategory}
            />
            <p className="products__count" aria-live="polite">
              {visible.length} {visible.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          <ProductGrid products={visible} query={query.trim()} onReset={reset} onBuy={buy} />
        </div>
      </section>

      <FeaturedProducts products={products} onBuy={buy} />
    </main>
  );
}
