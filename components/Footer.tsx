import Link from "next/link";
import { site } from "@/lib/site";
import { Logo, ZariBorder } from "./Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <ZariBorder />
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo tone="light" />
          <p className="tamil">{site.tamilName}</p>
          <p>Silk sarees, veshtis and vastrams for the gods, from {site.area}.</p>
        </div>
        <div>
          <h3>Shop</h3>
          <ul>
            <li><Link href="/shop?category=sarees">Silk sarees</Link></li>
            <li><Link href="/shop?category=dhotis">Dhotis & veshtis</Link></li>
            <li><Link href="/shop?category=vastrams">Divine vastrams</Link></li>
            <li><Link href="/custom-orders">Custom & bulk orders</Link></li>
          </ul>
        </div>
        <div>
          <h3>Visit</h3>
          <ul>
            <li>{site.area}</li>
            <li><a href={site.maps} target="_blank" rel="noreferrer">Get directions</a></li>
            <li><a href={site.instagram} target="_blank" rel="noreferrer">{site.instagramHandle}</a></li>
          </ul>
        </div>
      </div>
      <p className="site-footer__legal">© 2026 {site.name}</p>
    </footer>
  );
}
