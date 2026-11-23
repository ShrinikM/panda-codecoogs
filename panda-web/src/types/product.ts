/** One store's listing for a product. */
export type Offer = {
  id: string;
  store: string;
  price: number | null; // null = the store didn't list a price
  currency: string; // ISO code, e.g. "USD"
  source_url: string; // link to this product on the store's site
  checked_at: string; // when this store's price was collected, e.g. "2026-11-23T15:30:00Z"
};

/** A product, plus every store offer we found for it. */
export type Product = {
  id: string;
  name: string;
  offers: Offer[];
};
