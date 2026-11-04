import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products, query, onReset, onBuy }) {
  if (products.length === 0) {
    return (
      <div className="empty">
        <p className="empty__title">
          {query ? `No products match \u201C${query}\u201D.` : 'No products in this category yet.'}
        </p>
        <p className="empty__text">Try another search term or show every product.</p>
        <button type="button" className="btn btn--ghost btn--sm" onClick={onReset}>
          Show all products
        </button>
      </div>
    );
  }

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onBuy={onBuy} />
      ))}
    </div>
  );
}
