"use client";

import Link from "next/link";
import { BagLines, orderMessage, useCart } from "@/components/Cart";
import { inr, whatsappLink } from "@/lib/site";

export default function CartPage() {
  const { lines, subtotal } = useCart();

  return (
    <div className="page page--narrow">
      <h1 className="page-title">Your bag</h1>
      {lines.length === 0 ? (
        <div className="empty">
          <p>Your bag is empty. Add a saree, veshti or vastram and it will show up here.</p>
          <Link href="/shop" className="button">
            Browse the collection
          </Link>
        </div>
      ) : (
        <div className="bag-page">
          <BagLines />
          <aside className="bag-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>{inr(subtotal)}</strong>
            </div>
            <p className="bag-summary__note">
              Shipping is worked out when we confirm your order. Send the order to us on WhatsApp and we&rsquo;ll reply with payment and delivery details.
            </p>
            <a className="button button--block" href={whatsappLink(orderMessage(lines, subtotal))} target="_blank" rel="noreferrer">
              Order on WhatsApp
            </a>
            <Link href="/shop" className="button button--ghost button--block">
              Keep shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
