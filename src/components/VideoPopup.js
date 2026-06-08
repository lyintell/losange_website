"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PlayCircle, X } from "lucide-react";

export default function VideoPopup({ children, src, poster, title, className = "", previewAutoPlay = false, initialOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const videoSrc = String(src ?? "");
  const isEmbeddedVideo = videoSrc.includes("drive.google.com");
  const embeddedVideoSrc = isEmbeddedVideo && !videoSrc.includes("autoplay=") ? `${videoSrc}${videoSrc.includes("?") ? "&" : "?"}autoplay=1` : videoSrc;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button className={`video-popup-trigger ${className}`.trim()} type="button" onClick={() => setIsOpen(true)}>
        {children ?? (
          <>
            {isEmbeddedVideo ? (
              <Image src={poster} alt="" fill sizes="(max-width: 640px) 100vw, 340px" aria-hidden="true" />
            ) : (
              <video
                muted
                playsInline
                autoPlay={previewAutoPlay}
                loop={previewAutoPlay}
                poster={poster}
                preload={previewAutoPlay ? "auto" : "metadata"}
                aria-hidden="true"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
            <span className="video-play-badge" aria-hidden="true">
              <PlayCircle />
            </span>
          </>
        )}
        <span className="sr-only">Lire {title}</span>
      </button>

      {isOpen ? (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={title} onClick={() => setIsOpen(false)}>
          <div className="video-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button className="video-modal-close" type="button" onClick={() => setIsOpen(false)} aria-label="Fermer la vidéo">
              <X aria-hidden="true" />
            </button>
            {isEmbeddedVideo ? (
              <iframe src={embeddedVideoSrc} title={title} allow="autoplay; fullscreen" allowFullScreen />
            ) : (
              <video controls autoPlay playsInline poster={poster} preload="metadata">
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
