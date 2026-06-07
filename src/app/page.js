import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section section-light home-features" id="fonctionnalites">
        <div className="container">
          <SectionHeader
            eyebrow="Pour le chantier"
            title="Les informations essentielles, sans complexité"
            text="Losange va droit à l'essentiel : choisir le métier, saisir les cotes, rattacher le relevé au client et préparer le devis."
          />
          <div className="highlight-grid">
            {siteContent.highlights.map((item) => (
              <div className="highlight-item" key={item}>
                <CheckCircle2 aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-band" id="contact">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Une question avant de tester Losange ?</h2>
            <p>
              Appelez-nous ou écrivez-nous pour les tarifs, le déploiement et les futures mises à jour.
            </p>
          </div>
          <div className="contact-list">
            <a href={`tel:${siteContent.contact.phone}`}>{siteContent.contact.phone}</a>
            <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
            <span>{siteContent.contact.city}</span>
          </div>
        </div>
      </section>
    </>
  );
}
