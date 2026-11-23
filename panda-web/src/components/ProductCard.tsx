import type { Product } from "../types/product";
import OfferRow from "./OfferRow";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="product-card">
      <div className="product-card__header">
        <h3 className="product-card__name">{product.name}</h3>
        <span className="sample-badge">Sample</span>
      </div>

      {product.offers.length === 0 ? (
        <p>No store offers found for this product.</p>
      ) : (
        <ul className="offer-list">
          {product.offers.map((offer) => (
            <OfferRow key={offer.id} offer={offer} productName={product.name} />
          ))}
        </ul>
      )}
    </article>
  );
};

export default ProductCard;
