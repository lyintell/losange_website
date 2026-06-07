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
    src: "",
    poster: "/media/screenshots/chantier.svg",
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
      title: "Accueil chantier",
      image: "/media/screenshots/chantier.svg",
      alt: "Aperçu de l'écran chantier de Losange",
    },
    {
      title: "Saisie des cotes",
      image: "/media/screenshots/saisie.svg",
      alt: "Aperçu de l'écran de saisie des dimensions de Losange",
    },
    {
      title: "Devis estimatif",
      image: "/media/screenshots/devis.svg",
      alt: "Aperçu de l'écran devis de Losange",
    },
  ],
  tutorials: [
    {
      title: "Créer un chantier",
      duration: "2 min",
      text: "Ajouter un client, ouvrir un chantier et préparer le premier relevé.",
      poster: "/media/screenshots/chantier.svg",
      video: "",
    },
    {
      title: "Saisir un relevé",
      duration: "3 min",
      text: "Choisir un ouvrage, entrer les dimensions et vérifier les quantités.",
      poster: "/media/screenshots/saisie.svg",
      video: "",
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
