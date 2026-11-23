import type { Offer } from "../types/product";
import { formatCheckedAt, formatPrice } from "../utils/format";

type OfferRowProps = {
  offer: Offer;
  productName: string;
};

const OfferRow = ({ offer, productName }: OfferRowProps) => {
  return (
    <li className="offer">
      <span className="offer__store">{offer.store}</span>

      <span className="offer__price">
        {offer.price !== null ? (
          <>
            {formatPrice(offer.price, offer.currency)}{" "}
            <span className="offer__currency">{offer.currency}</span>
          </>
        ) : (
          "Price unavailable"
        )}
      </span>

      <span className="offer__checked">
        Checked {formatCheckedAt(offer.checked_at)}
      </span>

      <a
        className="offer__link"
        href={offer.source_url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${productName} at ${offer.store} (opens in a new tab)`}
      >
        View at {offer.store} ↗
      </a>
    </li>
  );
};

export default OfferRow;
