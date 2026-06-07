import PricingCards from "@/components/PricingCards";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Tarifs | Losange",
};

export default function PricingPage() {
  return (
    <>
      <section className="section section-light">
        <div className="container">
          <SectionHeader
            eyebrow="Tarifs"
            title="Deux comptes simples pour utiliser Losange"
            text="Le compte Gratuit permet de démarrer. Le compte Pro ajoute plus de capacité, plus de devis et un support prioritaire pour les équipes BTP."
          />
          <PricingCards />
        </div>
      </section>
    </>
  );
}
