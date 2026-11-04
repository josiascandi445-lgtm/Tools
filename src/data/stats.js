/*
  Hero indicators.
  `products` and `categories` are derived from the local catalogue.
  Anything with `value: null` renders as a dash. Set a real number here
  only when real data exists (do not invent sales or customer figures).
*/
export function getStats(products, categories) {
  return [
    { id: 'products', label: 'Products', value: products.length },
    { id: 'categories', label: 'Categories', value: categories.filter((c) => c.id !== 'all').length },
    { id: 'customers', label: 'Customers', value: null },
  ];
}
