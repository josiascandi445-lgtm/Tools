# Tools Art

Marketplace de recursos digitais. React + Vite, CSS próprio, Lucide React.

## Executar

```bash
npm install
npm run dev
```

## Estrutura

- `src/data/products.js`: catálogo local (dados de exemplo, substituir pelos reais) e categorias
- `src/data/stats.js`: indicadores do hero (`value: null` aparece como traço)
- `src/data/site.js`: descrição, email de contacto e links sociais
- `src/lib/checkout.js`: ponto único de compra, pronto para Lemon Squeezy
- `src/components/`, `src/pages/Home.jsx`, `src/styles/`

## Lemon Squeezy (próxima etapa)

Cada produto tem `lemonSqueezy: { variantId, checkoutUrl }`. Quando existir `checkoutUrl`,
o botão Buy now abre-o. Para usar o overlay ou checkouts criados no servidor, altere apenas
`startCheckout` em `src/lib/checkout.js`.
