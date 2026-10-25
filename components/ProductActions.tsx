"use client";

import { useState } from "react";
import type { ArtView } from "./SareeArt";
import SareeArt from "./SareeArt";
import type { Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { useCart } from "./Cart";

const galleryViews: { view: ArtView; label: string }[] = [
  { view: "full", label: "Full piece" },
  { view: "border", label: "Border close-up" },
  { view: "pallu", label: "Pallu close-up" },
];

export function Gallery({ product }: { product: Product }) {
  const [view, setView] = useState<ArtView>("full");
  return (
    <div className="gallery">
      <div className="gallery__main">
        <SareeArt {...product.art} view={view} label={`${product.name}, ${galleryViews.find((g) => g.view === view)!.label.toLowerCase()}`} />
      </div>
      <div className="gallery__thumbs">
        {galleryViews.map((g) => (
          <button
            key={g.view}
            type="button"
            className={view === g.view ? "gallery__thumb gallery__thumb--on" : "gallery__thumb"}
            onClick={() => setView(g.view)}
            aria-label={`Show ${g.label.toLowerCase()}`}
            aria-pressed={view === g.view}
          >
            <SareeArt {...product.art} view={g.view} />
          </button>
        ))}
      </div>
    </div>
  );
}

export function AddToBag({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes?.[0]);
  const [qty, setQty] = useState(1);

  const enquiry = `Vanakkam! I'm interested in "${product.name}"${size ? ` (${size})` : ""}. Is it available?`;

  return (
    <div className="buy">
      {product.sizes && (
        <fieldset className="sizes">
          <legend>{product.category === "vastrams" ? "Idol height" : "Size"}</legend>
          <div className="sizes__options">
            {product.sizes.map((s) => (
              <label key={s} className={size === s ? "size size--on" : "size"}>
                <input type="radio" name="size" value={s} checked={size === s} onChange={() => setSize(s)} />
                {s}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div className="buy__row">
        <div className="qty qty--large" aria-label="Quantity">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
            −
          </button>
          <span>{qty}</span>
          <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
            +
          </button>
        </div>
        <button type="button" className="button buy__add" onClick={() => add(product.slug, size, qty)}>
          Add to bag
        </button>
      </div>
      <a className="button button--ghost button--block" href={whatsappLink(enquiry)} target="_blank" rel="noreferrer">
        Ask about this on WhatsApp
      </a>
    </div>
  );
}
