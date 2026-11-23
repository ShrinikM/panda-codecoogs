import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

type ProductListProp = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProp) => {
  if (products.length === 0) {
    return <p className="status">No products to show.</p>;
  }
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
