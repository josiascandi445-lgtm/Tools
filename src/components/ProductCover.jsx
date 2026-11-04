import { Star } from 'lucide-react';
import { getIcon } from '../lib/icons.js';

/* Uses product.image when present, otherwise a generated cover. */
export default function ProductCover({ product, size = 'md', showBadge = true }) {
  const { cover = {}, formats = [], image, name } = product;
  const Icon = getIcon(cover.icon);
  const extra = formats.length - 1;

  return (
    <div className={`cover cover--${size} cover--${cover.pattern ?? 'grid'}`}>
      {image && <img className="cover__img" src={image} alt={name} loading="lazy" />}
      {!image && (
        <>
          <span className="cover__icon" aria-hidden="true">
            <Icon size={size === 'sm' ? 16 : 18} />
          </span>
          <span className="cover__ext" aria-hidden="true">
            {formats[0]}
            {extra > 0 && size !== 'sm' && <small>+{extra}</small>}
          </span>
        </>
      )}
      {showBadge && product.featured && (
        <span className="cover__badge">
          <Star size={12} aria-hidden="true" />
          Featured
        </span>
      )}
    </div>
  );
}
