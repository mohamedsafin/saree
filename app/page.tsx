import Link from "next/link";
import { Emblem, ZariBorder } from "@/components/Brand";
import ProductCard from "@/components/ProductCard";
import SareeArt from "@/components/SareeArt";
import { categories, products } from "@/lib/products";
import { site } from "@/lib/site";

const categoryArt = {
  sarees: products[0].art,
  dhotis: products[9].art,
  vastrams: products[11].art,
};

const recent = ["mango-yellow-green-bridal", "mustard-kanchipuram-maroon-korvai", "pure-silk-veshti-gold-border", "peacock-blue-soft-silk", "rani-pink-kanchipuram-checks", "amman-pattu-pavadai-red-gold", "pattu-veshti-angavastram-maroon", "bottle-green-arani-silk"]
  .map((slug) => products.find((p) => p.slug === slug)!);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="tamil hero__tamil">{site.tamilName}</p>
          <h1>Silks for the wedding, the temple and the deity.</h1>
          <p className="hero__lede">
            Kanchipuram sarees, pattu veshtis and vastrams stitched to fit the idol, chosen and sold from our shop in Mylapore.
          </p>
          <div className="hero__actions">
            <Link href="/shop?category=sarees" className="button">
              Shop silk sarees
            </Link>
            <Link href="/custom-orders" className="button button--ghost">
              Order a custom vastram
            </Link>
          </div>
        </div>
        <div className="hero__art">
          <div className="hero__drape hero__drape--back">
            <SareeArt kind="saree" body="#1F5137" border="#A3242F" motif="butta" />
          </div>
          <div className="hero__drape hero__drape--front">
            <SareeArt kind="saree" body="#8E1B2C" border="#155A5A" motif="mango" label="Arakku red Kanchipuram silk saree with a peacock blue border" />
          </div>
          <p className="hero__caption">
            Arakku red Kanchipuram, peacock korvai border
          </p>
        </div>
      </section>

      <ZariBorder />

      <section className="section">
        <div className="section__head">
          <h2>Shop by what you&rsquo;re dressing for</h2>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <Link key={c.id} href={`/shop?category=${c.id}`} className={`category-tile category-tile--${c.id}`}>
              <div className="category-tile__art">
                <SareeArt {...categoryArt[c.id]} />
              </div>
              <div className="category-tile__text">
                <h3>{c.label}</h3>
                <p>{c.blurb}</p>
                <span className="text-link">See all</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--sandal">
        <div className="section__head">
          <h2>Recently added</h2>
          <Link href="/shop" className="text-link">
            See the full collection
          </Link>
        </div>
        <div className="product-grid">
          {recent.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="vastram-band">
        <div className="vastram-band__emblem">
          <Emblem />
        </div>
        <div className="vastram-band__text">
          <h2>Dressing a deity at home or in a temple?</h2>
          <p>
            Send us the idol&rsquo;s height and the colour you want, and we&rsquo;ll stitch the pavadai or vastram to fit. We also take bulk orders for temples, festivals and family functions.
          </p>
          <Link href="/custom-orders" className="button button--zari">
            Start a custom order
          </Link>
        </div>
      </section>

      <section className="section trust">
        <div className="trust__item">
          <p className="trust__figure">{site.rating}</p>
          <p>
            out of 5 on Google, from {site.reviewCount} reviews.{" "}
            <a href={site.reviews} target="_blank" rel="noreferrer" className="text-link">
              Read the reviews
            </a>
          </p>
        </div>
        <div className="trust__item">
          <h3>See the silk in person</h3>
          <p>
            Come to the shop in {site.area} to feel the weight of the silk and see the zari in daylight.{" "}
            <a href={site.maps} target="_blank" rel="noreferrer" className="text-link">
              Get directions
            </a>
          </p>
        </div>
        <div className="trust__item">
          <h3>New pieces on Instagram first</h3>
          <p>
            We post new arrivals as soon as they come in.{" "}
            <a href={site.instagram} target="_blank" rel="noreferrer" className="text-link">
              Follow {site.instagramHandle}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
