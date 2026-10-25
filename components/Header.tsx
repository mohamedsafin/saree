"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { Logo } from "./Brand";
import { useCart } from "./Cart";

const nav = [
  { href: "/shop?category=sarees", label: "Sarees" },
  { href: "/shop?category=dhotis", label: "Dhotis" },
  { href: "/shop?category=vastrams", label: "Divine vastrams" },
  { href: "/custom-orders", label: "Custom orders" },
  { href: "/about", label: "Visit us" },
];

export default function Header() {
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          type="button"
          className="icon-button site-header__menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>

        <Link href="/" className="site-header__logo" aria-label={`${site.name} home`} onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <nav className={`site-nav${menuOpen ? " site-nav--open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="icon-button site-header__insta" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
            </svg>
          </a>
          <button type="button" className="bag-button" onClick={() => setOpen(true)}>
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 8h14l-1.2 12H6.2L5 8Z" />
              <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
            </svg>
            <span>Bag</span>
            {count > 0 && <span className="bag-button__count">{count}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
