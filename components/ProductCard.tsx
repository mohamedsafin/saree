import Link from "next/link";
import type { Product } from "@/lib/products";
import { inr } from "@/lib/site";
import SareeArt from "./SareeArt";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="product-card">
      <div className="product-card__art">
        <SareeArt {...product.art} />
        <SareeArt {...product.art} view="pallu" className="product-card__alt" />
        {product.tag && <span className="product-card__tag">{product.tag}</span>}
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p className="product-card__meta">{product.fabric}</p>
        <p className="product-card__price">
          {product.category === "vastrams" && <span className="from">from </span>}
          {inr(product.price)}
          {product.mrp && <s>{inr(product.mrp)}</s>}
        </p>
      </div>
    </Link>
  );
}
