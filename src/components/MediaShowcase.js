import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import VideoPopup from "@/components/VideoPopup";
import { siteContent } from "@/content/site";

export default function MediaShowcase({ initialTutorialId = "" }) {
  return (
    <section className="section" id="medias">
      <div className="container">
        <SectionHeader
          eyebrow="Aperçus"
          title="Découvrir Losange en images"
          text="Suivez les étapes clés de l'application et lancez les vidéos de démonstration."
        />
        <div className="screenshots-row">
          {siteContent.screenshots.map((screenshot, index) => (
            <div className="screenshot-step" key={screenshot.title}>
              <article className="screenshot-item">
                <Image src={screenshot.image} alt={screenshot.alt} width={210} height={420} />
                <h3>{screenshot.title}</h3>
              </article>
              {index < siteContent.screenshots.length - 1 ? (
                <div className="screenshot-arrow" aria-hidden="true">
                  <ArrowRight />
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="tutorial-grid">
          {siteContent.tutorials.map((tutorial) => (
            <article className="tutorial-card" key={tutorial.title}>
              <div className="tutorial-poster">
                {tutorial.video ? (
                  <VideoPopup
                    src={tutorial.video}
                    poster={tutorial.poster}
                    title={tutorial.title}
                    initialOpen={initialTutorialId === tutorial.id}
                  />
                ) : (
                  <Image src={tutorial.poster} alt="" width={120} height={220} />
                )}
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
