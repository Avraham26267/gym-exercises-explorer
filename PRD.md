# PRD · Gym Exercises Explorer

## L'idée
Une appli web pour explorer des exercices de musculation.
À gauche, une liste d'exercices. Quand je clique sur un exercice, ses détails s'affichent à côté.

## Pour qui, et pourquoi
- **Pour qui :** les personnes qui vont à la salle, surtout les débutants.
- **Pourquoi :** savoir rapidement quels muscles un exercice travaille et de quel matériel on a besoin.

## Les données
- **API :** wger — https://wger.de/api/v2/exerciseinfo/?language=2
- Gratuite, sans clé, accessible depuis le navigateur.
- Pour chaque exercice : `id`, nom, catégorie (Abs, Legs, Chest…), muscles principaux et secondaires, matériel, description, et parfois une image.

## Les écrans
L'appli tient sur **une seule page**, en deux parties :
1. **La liste** : une barre de recherche en haut, puis les exercices (nom + catégorie).
2. **Le panneau de détails** : nom, catégorie, muscles travaillés, matériel, description, image s'il y en a une.

Sur un écran étroit (téléphone), le panneau de détails passe sous la liste.

## Ce que je dois voir (critères d'acceptation)
- When I open the app, I see « Chargement… » puis la liste des exercices.
- When the API ne répond pas, I see un message d'erreur clair au lieu d'une page vide.
- When I click on an exercise, I see son nom, sa catégorie, ses muscles et son matériel dans le panneau de détails.
- When I type « curl » dans la recherche, I see seulement les exercices dont le nom contient « curl ».
- When I open the app sur un téléphone, I see la liste et les détails l'un sous l'autre, sans texte coupé.

## Pas dans ce projet
- Pas de serveur, pas de base de données, pas de compte ni de connexion.
- Pas de programme d'entraînement ni de suivi des séances.
