1. J ai developer une application mobile appelé losange. Verifie le dossier /prompts/projet.md pour comprendre l appli.

Ici, je veux cree un site web pour promovoir mon application. Ca sera un site web tres simple, mobile first. Une petite description de Losange, des screenshots de l'appli sur telephone, des videos tutoriels, une page Tarifs qui montrera les type de compte : Gratuit et Pro, avec les features de chaque et les prix. La devise est en FCFA.

Trois pages:
- Accueil incluant toutes les informations, type de comptes (Gratuit et Pro), et le contact en cas
- Tarifs incluant les informations de tarification avec la table de features et prix pour Gratuit et Pro
  avec bouton de telechargement.
- Tout les deux comptes necessite l identifiant et le numero de telephone de la personne. On s occupera des liens et des donnees apres.

Design
- Utilise les meme couleurs que l app lui meme.
- Le logo de l appli est /prompts/logo.png. 
- Simpliste avec les informations essentiels seulements.

Stack
- Next js

Architecture
- Pages et components bien separer
- Pas de code complex
- Js seulement, pas de Ts
- Un Dossier contenant toutes les info que je voudrais modifier apres. Exemple:
    - information de contact
    - images de logo, screenshots, videos, etc

- Pour le moment un site statique. On travaillera apres sur le check des identifiants et numero de telephone, sauvegarde des fichiers images et videos sur le cloud, base de donnees si necessaire, etc.

2. Corrige tout le site des erreurs de francais. Assure toi que tout est correct grammaire, orthograph, accents, etc.

3. Enleve la partie "Parcours"

4. Enleve les watermark nextjs

5. Enleve le hero de la page tarif. Deplace le table des fonctionalites avant les tarifs

6. Ajoute un bouton Vidéos entre Acceuil et Tarifs. Déplace la partie captures d'écrans et tutoriel sur cette page (enleve de l acceuil)

7. Lors que la combinaision identifiant et telephone est validé, alors le lien automatiquement telecharge le fichier /prompts/app_downloads/losange.apk (seulement si acces a travers phone).
Si access a travers ordi, Afficher "Vous devez acceder le site à travers votre téléphone pour télécharger l'application".
On s occupera de la verification de l identifiant et telephone apres