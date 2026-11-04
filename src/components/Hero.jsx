import { getIcon } from '../lib/icons.js';
import { getStats } from '../data/stats.js';
import { scrollToId } from '../lib/scroll.js';

export default function Hero({ products, categories, onSelectCategory }) {
  const stats = getStats(products, categories);
  const rows = categories
    .filter((c) => c.id !== 'all')
    .map((c) => {
      const items = products.filter((p) => p.category === c.id);
      const formats = [...new Set(items.flatMap((p) => p.formats))].slice(0, 3);
      return { ...c, count: items.length, formats };
    });

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="badge">
            <span className="badge__dot" aria-hidden="true" />
            Digital Resources Marketplace
          </span>

          <h1 className="hero__title">
            Everything You Need to <span className="text-accent">Create &amp; Build.</span>
          </h1>

          <p className="hero__lede">
            Discover premium digital resources, creative assets and powerful tools designed to
            help you work smarter and create better.
          </p>

          <div className="hero__cta">
            <button type="button" className="btn btn--primary" onClick={() => scrollToId('products')}>
              Explore Products
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => scrollToId('featured')}>
              Discover Resources
            </button>
          </div>

          <dl className="hero__stats">
            {stats.map((s) => (
              <div key={s.id} className="stat">
                <dt className="stat__label">{s.label}</dt>
                <dd className={`stat__value ${s.value == null ? 'is-empty' : ''}`}>
                  {s.value ?? '\u2014'}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="index" aria-label="Library by category">
          <div className="index__head">
            <span>Library</span>
            <span>Products</span>
          </div>
          <ul>
            {rows.map((r, i) => {
              const Icon = getIcon(r.icon);
              return (
                <li key={r.id}>
                  <button
                    type="button"
                    className="index__row"
                    style={{ '--i': i }}
                    onClick={() => onSelectCategory(r.id)}
                  >
                    <span className="index__icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="index__main">
                      <span className="index__name">{r.label}</span>
                      <span className="index__formats">{r.formats.join('  ')}</span>
                    </span>
                    <span className="index__count">{r.count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
