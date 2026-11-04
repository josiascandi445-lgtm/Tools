/*
  Single entry point for buying a product.
  Stage 1: no payments. When a product has a Lemon Squeezy checkout URL
  it opens in a new tab; otherwise the visitor gets a clear message.
  Stage 2: replace the body with Lemon Squeezy's overlay or a
  server-created checkout. Components do not need to change.
*/
export function startCheckout(product, notify) {
  const url = product.lemonSqueezy?.checkoutUrl;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
    return;
  }
  notify(`${product.name}: checkout is not available yet.`);
}
