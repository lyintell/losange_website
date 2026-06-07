import DownloadForm from "@/components/DownloadForm";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Téléchargement | Losange",
};

export default function DownloadPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Téléchargement</p>
          <h1>Obtenez votre accès Losange</h1>
          <p>
            Appelez-nous au <a className="contact-highlight" href="tel:+22370723456">70 72 34 56</a> ou écrivez-nous sur <a className="contact-highlight" href="https://wa.me/22370723456">WhatsApp</a> ou par email à <a className="contact-highlight" href="mailto:oumar.ly@lyintell.com">oumar.ly@lyintell.com</a> pour obtenir vos informations d&apos;accès avant de télécharger l&apos;application.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container narrow">
          <SectionHeader
            eyebrow="Accès"
            title="Choisir un compte"
            text="Saisissez vos informations pour vérifier votre accès avant de lancer le téléchargement."
          />
          <DownloadForm />
        </div>
      </section>
    </>
  );
}
