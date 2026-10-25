"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useState } from "react";
import { getProduct, type Product } from "@/lib/products";
import { inr, whatsappLink } from "@/lib/site";
import SareeArt from "./SareeArt";

type Line = { slug: string; size?: string; qty: number };
type CartLine = Line & { product: Product };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  add: (slug: string, size: string | undefined, qty: number) => void;
  setQty: (index: number, qty: number) => void;
  remove: (index: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "smsh-bag";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [raw, setRaw] = useState<Line[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setRaw(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
    } catch {}
  }, [raw, loaded]);

  const lines = raw.flatMap((l) => {
    const product = getProduct(l.slug);
    return product ? [{ ...l, product }] : [];
  });

  const value: CartContextValue = {
    lines,
    count: lines.reduce((n, l) => n + l.qty, 0),
    subtotal: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
    isOpen,
    setOpen,
    add(slug, size, qty) {
      setRaw((prev) => {
        const i = prev.findIndex((l) => l.slug === slug && l.size === size);
        if (i === -1) return [...prev, { slug, size, qty }];
        return prev.map((l, j) => (j === i ? { ...l, qty: l.qty + qty } : l));
      });
      setOpen(true);
    },
    setQty(index, qty) {
      setRaw((prev) => prev.map((l, i) => (i === index ? { ...l, qty: Math.max(1, qty) } : l)));
    },
    remove(index) {
      setRaw((prev) => prev.filter((_, i) => i !== index));
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function orderMessage(lines: CartLine[], subtotal: number) {
  const items = lines
    .map((l) => `• ${l.product.name}${l.size ? ` (${l.size})` : ""} × ${l.qty} = ${inr(l.qty * l.product.price)}`)
    .join("\n");
  return `Vanakkam! I'd like to order:\n${items}\n\nSubtotal: ${inr(subtotal)}`;
}

export function BagLines({ compact = false }: { compact?: boolean }) {
  const { lines, setQty, remove, setOpen } = useCart();
  return (
    <ul className={`bag-lines${compact ? " bag-lines--compact" : ""}`}>
      {lines.map((l, i) => (
        <li key={`${l.slug}-${l.size ?? ""}`} className="bag-line">
          <Link href={`/product/${l.slug}`} className="bag-line__art" onClick={() => setOpen(false)}>
            <SareeArt {...l.product.art} />
          </Link>
          <div className="bag-line__info">
            <Link href={`/product/${l.slug}`} className="bag-line__name" onClick={() => setOpen(false)}>
              {l.product.name}
            </Link>
            {l.size && <span className="bag-line__size">{l.size}</span>}
            <div className="bag-line__row">
              <div className="qty" aria-label="Quantity">
                <button type="button" onClick={() => setQty(i, l.qty - 1)} aria-label="Decrease quantity">
                  −
                </button>
                <span>{l.qty}</span>
                <button type="button" onClick={() => setQty(i, l.qty + 1)} aria-label="Increase quantity">
                  +
                </button>
              </div>
              <span className="bag-line__price">{inr(l.qty * l.product.price)}</span>
            </div>
            <button type="button" className="link-button" onClick={() => remove(i)}>
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function CartDrawer() {
  const { lines, subtotal, isOpen, setOpen } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, setOpen]);

  return (
    <div className={`drawer${isOpen ? " drawer--open" : ""}`} aria-hidden={!isOpen}>
      <div className="drawer__scrim" onClick={() => setOpen(false)} />
      <aside className="drawer__panel" role="dialog" aria-label="Your bag" aria-modal="true">
        <header className="drawer__head">
          <h2>Your bag</h2>
          <button type="button" className="icon-button" onClick={() => setOpen(false)} aria-label="Close bag">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </header>
        {lines.length === 0 ? (
          <div className="drawer__empty">
            <p>Your bag is empty.</p>
            <Link href="/shop" className="button" onClick={() => setOpen(false)}>
              Browse the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="drawer__body">
              <BagLines compact />
            </div>
            <footer className="drawer__foot">
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>{inr(subtotal)}</strong>
              </div>
              <a className="button button--block" href={whatsappLink(orderMessage(lines, subtotal))} target="_blank" rel="noreferrer">
                Order on WhatsApp
              </a>
              <Link href="/cart" className="button button--ghost button--block" onClick={() => setOpen(false)}>
                View bag
              </Link>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
