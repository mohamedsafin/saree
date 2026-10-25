import type { Metadata } from "next";
import Link from "next/link";
import { ZariBorder } from "@/components/Brand";
import SareeArt from "@/components/SareeArt";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Visit us" };

export default function AboutPage() {
  return (
    <>
      <div className="page">
        <div className="about">
          <div className="about__text">
            <p className="tamil hero__tamil">{site.tamilName}</p>
            <h1 className="page-title">A silk shop in the heart of Mylapore</h1>
            <p>
              Mylapore has dressed Chennai&rsquo;s weddings and temples for generations. Our shop is part of that: Kanchipuram and soft silk sarees, pattu veshtis for grooms and priests, and vastrams for the gods, stitched in any size.
            </p>
            <p>
              Every piece is chosen by hand. Come in to feel the silk, compare borders side by side and see how the zari catches the light.
            </p>
            <div className="hero__actions">
              <a href={site.maps} target="_blank" rel="noreferrer" className="button">
                Get directions
              </a>
              <Link href="/shop" className="button button--ghost">
                Shop online
              </Link>
            </div>
          </div>
          <div className="about__art">
            <SareeArt kind="saree" body="#DDAE36" border="#2D6A3E" motif="mango" view="border" />
          </div>
        </div>
      </div>
      <ZariBorder />
      <section className="section visit">
        <div>
          <h2>Where to find us</h2>
          <p>{site.area}</p>
        </div>
        <div>
          <h2>Talk to us</h2>
          <p>
            Message us on{" "}
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="text-link">
              WhatsApp
            </a>{" "}
            or{" "}
            <a href={site.instagram} target="_blank" rel="noreferrer" className="text-link">
              Instagram
            </a>
            .
          </p>
        </div>
        <div>
          <h2>Reviews</h2>
          <p>
            Rated {site.rating} out of 5 on Google by {site.reviewCount} customers.{" "}
            <a href={site.reviews} target="_blank" rel="noreferrer" className="text-link">
              Read them
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
