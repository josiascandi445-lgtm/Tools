import { ShoppingBag } from 'lucide-react';
import ProductCover from './ProductCover.jsx';
import { formatPrice } from '../lib/format.js';
import { getCategoryLabel } from '../data/products.js';

export default function ProductCard({ product, onBuy }) {
  return (
    <article className="card">
      <ProductCover product={product} />
      <div className="card__body">
        <span className="card__category">{getCategoryLabel(product.category)}</span>
        <h3 className="card__name">{product.name}</h3>
        <p className="card__desc">{product.description}</p>
      </div>
      <div className="card__foot">
        <span className="price">{formatPrice(product)}</span>
        <button type="button" className="btn btn--primary btn--sm" onClick={() => onBuy(product)}>
          <ShoppingBag size={16} aria-hidden="true" />
          Buy now
        </button>
      </div>
    </article>
  );
}
