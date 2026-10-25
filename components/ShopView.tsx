"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories, products, type Category } from "@/lib/products";
import ProductCard from "./ProductCard";

type Sort = "featured" | "low" | "high";

export default function ShopView() {
  const params = useSearchParams();
  const active = categories.find((c) => c.id === params.get("category"))?.id as Category | undefined;
  const [sort, setSort] = useState<Sort>("featured");

  const current = categories.find((c) => c.id === active);
  const list = products
    .filter((p) => !active || p.category === active)
    .sort((a, b) => (sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0));

  return (
    <>
      <div className="shop-head">
        <h1>{current ? current.label : "The collection"}</h1>
        <p>{current ? current.blurb : "Silk sarees, dhotis and vastrams for the gods, all chosen in Mylapore."}</p>
      </div>

      <div className="shop-bar">
        <nav className="chips" aria-label="Category">
          <Link href="/shop" className={!active ? "chip chip--on" : "chip"} aria-current={!active ? "page" : undefined}>
            Everything
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/shop?category=${c.id}`}
              className={active === c.id ? "chip chip--on" : "chip"}
              aria-current={active === c.id ? "page" : undefined}
            >
              {c.label}
            </Link>
          ))}
        </nav>
        <label className="sort">
          <span>Sort by</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="featured">Featured</option>
            <option value="low">Price, low to high</option>
            <option value="high">Price, high to low</option>
          </select>
        </label>
      </div>

      <p className="shop-count">{list.length} pieces</p>
      <div className="product-grid">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
