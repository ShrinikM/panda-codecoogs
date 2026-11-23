import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/productService";
import ProductList from "../components/ProductList";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="page">
      <h1>Compare prices</h1>
      <p className="sample-note">(Sample data, not live prices.)</p>
      {isLoading ? (
        <p className="status">Loading Products...</p>
      ) : (
        <ProductList products={products} />
      )}
    </main>
  );
}

export default ProductsPage;
