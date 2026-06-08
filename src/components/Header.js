"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Home, Menu, ReceiptText, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";

const links = [
  { href: "/", label: "Accueil", Icon: Home },
  { href: "/tarifs", label: "Tarifs", Icon: ReceiptText },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Navigation principale">
        <Link href="/" className="brand-link" aria-label="Accueil Losange" onClick={closeMenu}>
          <Image src={siteContent.brand.logo} alt="Logo Losange" width={46} height={46} priority />
          <span>{siteContent.brand.name}</span>
        </Link>
        <div className="nav-links">
          {links.map(({ href, label, Icon }) => (
            <Link className={pathname === href ? "nav-link active" : "nav-link"} key={href} href={href}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
        <Link className="icon-button" href="/telechargement" aria-label="Télécharger Losange">
          <Download aria-hidden="true" />
          <span>Télécharger</span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      <div className={isMenuOpen ? "mobile-menu open" : "mobile-menu"}>
        <div className="container mobile-menu-panel">
          {links.map(({ href, label, Icon }) => (
            <Link className={pathname === href ? "mobile-menu-link active" : "mobile-menu-link"} key={href} href={href} onClick={closeMenu}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </Link>
          ))}
          <Link className="mobile-menu-link mobile-menu-download" href="/telechargement" onClick={closeMenu}>
            <Download aria-hidden="true" />
            <span>Télécharger</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
