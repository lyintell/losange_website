import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { siteContent } from "@/content/site";
import VideoPopup from "@/components/VideoPopup";

export default function Hero() {
  const heroVideo = siteContent.heroVideo;

  return (
    <section className="hero">
      <div className="container hero-eyebrow-box">
        <p className="hero-eyebrow">Application mobile des professionnels de la construction.</p>
      </div>
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1>{siteContent.brand.name}</h1>
          <p className="hero-tagline">{siteContent.brand.tagline}</p>
          <p>{siteContent.brand.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/telechargement">
              {siteContent.download.label}
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button-soft" href="/tarifs">
              Voir les tarifs
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Vidéo de présentation de Losange">
          <div className="hero-video-frame">
            {heroVideo.src ? (
              <VideoPopup
                src={heroVideo.src}
                poster={heroVideo.poster}
                title={heroVideo.title}
                className="hero-video-popup"
                previewAutoPlay
              />
            ) : (
              <div className="hero-video-placeholder">
                <PlayCircle aria-hidden="true" />
                <span>{heroVideo.title}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
