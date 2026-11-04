import { Check, ShoppingBag } from 'lucide-react';
import ProductCover from './ProductCover.jsx';
import { formatPrice } from '../lib/format.js';
import { getCategoryLabel } from '../data/products.js';

export default function FeaturedProducts({ products, onBuy }) {
  const featured = products.filter((p) => p.featured);
  if (featured.length === 0) return null;
  const [lead, ...rest] = featured;

  return (
    <section id="featured" className="section featured">
      <div className="container">
        <header className="section-head">
          <h2>Featured Products</h2>
          <p>Selected resources to start with.</p>
        </header>

        <div className="featured__layout">
          <article className="lead">
            <ProductCover product={lead} size="lg" showBadge={false} />
            <div className="lead__body">
              <span className="card__category">{getCategoryLabel(lead.category)}</span>
              <h3 className="lead__name">{lead.name}</h3>
              <p className="lead__desc">{lead.description}</p>

              {lead.includes && (
                <ul className="lead__list">
                  {lead.includes.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="lead__foot">
                <span className="price price--lg">{formatPrice(lead)}</span>
                <button type="button" className="btn btn--primary" onClick={() => onBuy(lead)}>
                  <ShoppingBag size={16} aria-hidden="true" />
                  Buy now
                </button>
              </div>
            </div>
          </article>

          <ul className="featured__list">
            {rest.map((p) => (
              <li key={p.id} className="row">
                <ProductCover product={p} size="sm" showBadge={false} />
                <div className="row__main">
                  <span className="card__category">{getCategoryLabel(p.category)}</span>
                  <h3 className="row__name">{p.name}</h3>
                  <span className="price">{formatPrice(p)}</span>
                </div>
                <button
                  type="button"
                  className="icon-btn icon-btn--bordered"
                  onClick={() => onBuy(p)}
                  aria-label={`Buy ${p.name}`}
                >
                  <ShoppingBag size={18} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
