const localVideoBase = process.env.NODE_ENV === "development" ? "/media/videos" : "";

function normalizeGoogleDriveVideoUrl(url) {
  const trimmedUrl = String(url ?? "").trim();

  if (!trimmedUrl.includes("drive.google.com")) {
    return trimmedUrl;
  }

  const fileId = trimmedUrl.match(/\/file\/d\/([^/]+)/)?.[1] ?? trimmedUrl.match(/[?&]id=([^&]+)/)?.[1];

  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : trimmedUrl;
}

const video1Url = normalizeGoogleDriveVideoUrl(process.env.NEXT_PUBLIC_VIDEO_1_URL) || (localVideoBase ? `${localVideoBase}/v1.mp4` : "");
const video2Url = normalizeGoogleDriveVideoUrl(process.env.NEXT_PUBLIC_VIDEO_2_URL) || (localVideoBase ? `${localVideoBase}/v2.mp4` : "");

export const siteContent = {
  brand: {
    name: "Losange",
    logo: "/assets/logo2.png",
    tagline: "Le carnet de chantier qui calcule vos devis.",
    description:
      "Losange aide les professionels et entreprises dans le domaine de la construction à saisir les dimensions sur le terrain et à préparer des devis propres et rapides.",
  },
  contact: {
    phone: "+223 70 72 43 22",
    whatsapp: "+223 70 72 43 22",
    email: "oumar.ly@lyintell.com",
    city: "Bamako, Mali",
  },
  download: {
    label: "Télécharger l'application",
    note: "Après validation de vos informations, le téléchargement démarre automatiquement depuis votre téléphone.",
  },
  heroVideo: {
    src: "/media/videos/Intro.mp4",
    poster: "/media/screenshots/sc1.jpg",
    title: "Vidéo de présentation Losange",
  },
  highlights: [
    "Saisie des dimensions adaptée au terrain",
    "Fonctionnement hors connexion pour les chantiers sans réseau",
    "Calcul automatique des quantités, montants et devis estimatifs",
    "Clients, chantiers et relevés organisés dans une seule application",
  ],
  screenshots: [
    {
      title: "I - Accueil",
      image: "/media/screenshots/sc1.jpg",
      alt: "Capture d'écran Losange étape 1",
    },
    {
      title: "II - Choix du métier",
      image: "/media/screenshots/sc2.jpg",
      alt: "Capture d'écran Losange étape 2",
    },
    {
      title: "III - Dimensions / relevés",
      image: "/media/screenshots/sc4.jpg",
      alt: "Capture d'écran Losange étape 3",
    },
    {
      title: "IV - Devis",
      image: "/media/screenshots/scxx.jpg",
      alt: "Capture d'écran Losange étape 4",
    },
  ],
  tutorials: [
    {
      id: "v1",
      title: "Nouveau chantier et dimensions",
      duration: "Vidéo 1",
      poster: "/media/screenshots/sc1.jpg",
      video: video1Url,
    },
    {
      id: "v2",
      title: "Information chantier et devis",
      duration: "Vidéo 2",
      poster: "/media/screenshots/sc2.jpg",
      video: video2Url,
    },
  ],
  plans: [
    {
      name: "Gratuit",
      price: "0 FCFA",
      period: "/ mois",
      summary: "Pour découvrir Losange et structurer ses premiers relevés.",
      cta: "Démarrer gratuitement",
      featured: false,
      features: [
        "Saisie des relevés de terrain",
        "Clients et chantiers",
        "Catalogue d'ouvrages",
        "Export de devis",
      ],
      limits: "Idéal pour un utilisateur qui veut tester l'application, et améliorer la gestion de ses chantiers et devis.",
    },
    {
      name: "Pro",
      price: "10 000 FCFA",
      period: "/ mois + 1000 FCFA/ utilisateur",
      summary: "Pour les entreprises et professionnels qui veulent aller plus loin.",
      cta: "Choisir Pro",
      featured: true,
      features: [
        "Relevés, clients et chantiers illimités",
        "Catalogue d'ouvrages illimités",
        "Devis PDF propres avec logo",
        "Synchronisation des données et images dans le cloud",
        "Support par email et téléphone",
      ],
      limits: "Recommandé pour les PME, les chefs de chantier et les équipes commerciales.",
    },
  ],
};
