import Link from "next/link";
import { siteContent } from "@/content/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <strong>{siteContent.brand.name}</strong>
          <p>{siteContent.brand.tagline}</p>
        </div>
        <div className="footer-links">
          <Link href="/">Accueil</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/telechargement">Téléchargement</Link>
        </div>
      </div>
    </footer>
  );
}
