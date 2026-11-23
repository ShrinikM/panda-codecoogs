import type { Product } from "../types/product";

/**
 * SAMPLE DATA — not live prices.
 */
export const sampleProducts: Product[] = [
  {
    id: "p1",
    name: "Ceramic Coffee Mug, 16 oz",
    offers: [
      {
        id: "p1-walmart",
        store: "Walmart",
        price: 8.97,
        currency: "USD",
        source_url: "https://www.walmart.com/",
        checked_at: "2026-11-23T14:05:00Z",
      },
      {
        id: "p1-target",
        store: "Target",
        price: 12.49,
        currency: "USD",
        source_url: "https://www.target.com/",
        checked_at: "2026-11-23T13:30:00Z",
      },
      {
        id: "p1-costco",
        store: "Costco",
        price: null,
        currency: "USD",
        source_url: "https://www.costco.com/",
        checked_at: "2026-11-22T21:12:00Z",
      },
    ],
  },
  {
    id: "p2",
    name: "Wireless Over-Ear Headphones",
    offers: [
      {
        id: "p2-bestbuy",
        store: "Best Buy",
        price: 329.99,
        currency: "USD",
        source_url: "https://www.bestbuy.com/",
        checked_at: "2026-11-23T15:30:00Z",
      },
      {
        id: "p2-amazon",
        store: "Amazon",
        price: 298.0,
        currency: "USD",
        source_url: "https://www.amazon.com/",
        checked_at: "2026-11-23T16:05:00Z",
      },
    ],
  },
];
