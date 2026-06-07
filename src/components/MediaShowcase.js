import Image from "next/image";
import { PlayCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { siteContent } from "@/content/site";

export default function MediaShowcase() {
  return (
    <section className="section" id="medias">
      <div className="container">
        <SectionHeader
          eyebrow="Aperçus"
          title="Captures d'écran et tutoriels"
          text="Remplacez les fichiers dans public/media pour afficher les vraies captures et vidéos de l'application."
        />
        <div className="screenshots-row">
          {siteContent.screenshots.map((screenshot) => (
            <article className="screenshot-item" key={screenshot.title}>
              <Image src={screenshot.image} alt={screenshot.alt} width={210} height={420} />
              <h3>{screenshot.title}</h3>
            </article>
          ))}
        </div>
        <div className="tutorial-grid">
          {siteContent.tutorials.map((tutorial) => (
            <article className="tutorial-card" key={tutorial.title}>
              <div className="tutorial-poster">
                <Image src={tutorial.poster} alt="" width={120} height={220} />
                <PlayCircle aria-hidden="true" />
              </div>
              <div>
                <span>{tutorial.duration}</span>
                <h3>{tutorial.title}</h3>
                <p>{tutorial.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
