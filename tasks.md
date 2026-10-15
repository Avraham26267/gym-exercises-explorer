# Tâches · Gym Exercises Explorer

Une tâche à la fois, dans l'ordre. Après chaque tâche : je lance l'appli, je vérifie, je fais un commit.

## 1. Afficher une liste depuis un fichier local
Créer un fichier JSON avec 5 exercices d'exemple, et les afficher avec les composants `ExerciseList` et `ExerciseItem` (avec `map` et une `key`). Pas encore d'API.
- **Done when:** je lance `npm run dev` et je vois les 5 noms d'exercices avec leur catégorie, sans erreur dans la console.

## 2. Cliquer sur un exercice pour voir ses détails
Garder l'exercice choisi dans un `state` de `App`, et l'envoyer en `props` au composant `ExerciseDetails`.
- **Done when:** je clique sur un exercice et je vois son nom, sa catégorie, ses muscles et son matériel dans le panneau de détails.

## 3. Récupérer les vrais exercices depuis l'API wger
Remplacer le fichier local par un `fetch` dans un `useEffect`, et afficher les 3 états : chargement, erreur, données.
- **Done when:** je vois « Chargement… », puis la vraie liste. Si je coupe internet et que je recharge, je vois un message d'erreur.

## 4. Rechercher un exercice par son nom
Ajouter un composant `SearchBar`. Le texte tapé filtre la liste.
- **Done when:** je tape « curl » et je ne vois que les exercices dont le nom contient « curl ». Si j'efface le texte, toute la liste revient.

## 5. Mettre en page et adapter au téléphone
Écrire mon propre CSS : la liste à gauche et les détails à droite. Sur un écran étroit, les détails passent sous la liste.
- **Done when:** l'appli est lisible sur ordinateur et en mode téléphone (outils du navigateur, largeur 375 px), sans texte coupé.

## 6. Écrire le README
Expliquer ce que fait l'appli, comment la lancer, et quelle API elle utilise.
- **Done when:** quelqu'un qui ne connaît pas le projet peut lancer l'appli juste en lisant le README.
