"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Home, PlayCircle, ReceiptText } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";

const links = [
  { href: "/", label: "Accueil", Icon: Home },
  { href: "/videos", label: "Vidéos", Icon: PlayCircle },
  { href: "/tarifs", label: "Tarifs", Icon: ReceiptText },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Navigation principale">
        <Link href="/" className="brand-link" aria-label="Accueil Losange">
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
      </nav>
    </header>
  );
}
