import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToBag, Gallery } from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";
import { categories, getProduct, products } from "@/lib/products";
import { inr } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.description } : {};
}

export default async function ProductPage(props: PageProps<"/product/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.category)!;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const details = [
    ["Fabric", product.fabric],
    ["Weave", product.weave],
    ["Length", product.length],
    ...(product.blouse ? [["Blouse", product.blouse]] : []),
  ];

  return (
    <div className="page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/shop">Shop</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/shop?category=${category.id}`}>{category.label}</Link>
      </nav>

      <div className="product">
        <Gallery product={product} />

        <div className="product__info">
          {product.tag && <p className="product__tag">{product.tag}</p>}
          <h1>{product.name}</h1>
          <p className="product__price">
            {product.category === "vastrams" && <span className="from">from </span>}
            {inr(product.price)}
            {product.mrp && <s>{inr(product.mrp)}</s>}
          </p>
          <p className="product__tax">Inclusive of GST</p>
          <p className="product__desc">{product.description}</p>

          <AddToBag product={product} />

          <dl className="specs">
            {details.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <details className="fold">
            <summary>Care</summary>
            <p>{product.care}</p>
          </details>
          <details className="fold">
            <summary>Delivery</summary>
            <p>
              We ship across India from Mylapore. Delivery dates are confirmed on WhatsApp once you place your order. You&rsquo;re welcome to pick it up from the shop too.
            </p>
          </details>
        </div>
      </div>

      {related.length > 0 && (
        <section className="related">
          <h2>More {category.label.toLowerCase()}</h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
