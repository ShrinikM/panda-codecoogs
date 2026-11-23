# PANDA — Web App (Sprint 1)

A React + TypeScript + Vite web app that displays sample product cards
(name, store, price, when the price was checked, and a link to the store).
All products are **sample data** for now.

## Requirements

- Node.js 20.19+ or 22.12+ (check with `node -v`)

## Run it

```bash
cd panda-web
npm install   # first time only
npm run dev
```

Open the link it prints (usually http://localhost:5173).

## What you should see

- "Loading Products..." for half a second, then 3 product cards
- One card shows "Price unavailable" (a product with no price)
- Clicking **Spending** shows a "coming soon" placeholder page

## Testing the empty message

In `src/services/productService.ts`, change `return sampleProducts;` to
`return [];`. The page should show "Loading Products..." and then
"No products to show". Change it back when done.

## Project structure

- `src/types/` — the `Product` type (must match the team's agreed record)
- `src/data/` — sample products
- `src/services/` — where products come from; swap in the backend here later
- `src/components/` — reusable pieces (`ProductCard`, `ProductList`)
- `src/pages/` — one file per screen (`ProductsPage`, `SpendingPage`)
