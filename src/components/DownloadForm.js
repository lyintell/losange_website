"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { siteContent } from "@/content/site";

export default function DownloadForm() {
  const [selectedPlan, setSelectedPlan] = useState(siteContent.plans[0].name);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function isPhoneAccess() {
    return /Android|iPhone|iPod|Windows Phone|Mobile/i.test(window.navigator.userAgent);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isPhoneAccess()) {
      setMessage("Vous devez accéder au site à travers votre téléphone pour télécharger l'application.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const identifier = String(formData.get("identifier") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    setIsSubmitting(true);
    setMessage("Vérification en cours...");

    try {
      const response = await fetch("/api/download-apk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, phone }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => null);
        setMessage(error?.message ?? "Téléchargement non autorisé.");
        return;
      }

      const apk = await response.blob();
      const downloadUrl = window.URL.createObjectURL(apk);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "losange.apk";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
      setMessage("Téléchargement lancé.");
    } catch {
      setMessage("Impossible de lancer le téléchargement pour le moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="download-form" onSubmit={handleSubmit}>
      <div className="plan-toggle" aria-label="Type de compte">
        {siteContent.plans.map((plan) => (
          <button
            type="button"
            className={selectedPlan === plan.name ? "active" : ""}
            onClick={() => setSelectedPlan(plan.name)}
            key={plan.name}
          >
            {plan.name}
          </button>
        ))}
      </div>

      <label>
        Identifiant
        <input name="identifier" type="text" placeholder="Ex: LOS-0001" required />
      </label>

      <label>
        Numéro de téléphone
        <input name="phone" type="tel" placeholder="Ex: +223 00 00 00 00" required />
      </label>

      <button className="button button-primary" type="submit" disabled={isSubmitting}>
        <Download aria-hidden="true" />
        {isSubmitting ? "Vérification..." : `Continuer avec ${selectedPlan}`}
      </button>

      <p className="form-note">{siteContent.download.note}</p>
      {message ? <p className="form-message" role="status">{message}</p> : null}
    </form>
  );
}
