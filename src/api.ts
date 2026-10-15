import type { Exercise } from './types'

// language=2 → anglais ; limit=200 → les 200 premiers exercices
const API_URL = 'https://wger.de/api/v2/exerciseinfo/?language=2&limit=200'
const ENGLISH = 2

// La forme (simplifiée) d'un exercice tel que l'API wger le renvoie
type ApiExercise = {
  id: number
  category: { name: string }
  muscles: { name: string; name_en: string }[]
  equipment: { name: string }[]
  images: { image: string; is_main: boolean }[]
  translations: { language: number; name: string; description: string }[]
}

// Enlève les balises HTML (<p>, <ul>…) de la description
function removeHtml(text: string): string {
  return text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

// Transforme un exercice de l'API en exercice simple pour notre appli
function toExercise(apiExercise: ApiExercise): Exercise | null {
  const english = apiExercise.translations.find((t) => t.language === ENGLISH)
  if (!english) {
    return null
  }

  const mainImage =
    apiExercise.images.find((image) => image.is_main) ?? apiExercise.images[0]

  return {
    id: apiExercise.id,
    name: english.name,
    category: apiExercise.category.name,
    muscles: apiExercise.muscles.map((muscle) => muscle.name_en || muscle.name),
    equipment: apiExercise.equipment.map((item) => item.name),
    description: removeHtml(english.description),
    imageUrl: mainImage ? mainImage.image : null,
  }
}

// Va chercher les exercices sur l'API et renvoie la liste simplifiée
export async function fetchExercises(): Promise<Exercise[]> {
  const response = await fetch(API_URL)
  if (!response.ok) {
    throw new Error(`Erreur ${response.status}`)
  }

  const data: { results: ApiExercise[] } = await response.json()
  const exercises: Exercise[] = []
  for (const apiExercise of data.results) {
    const exercise = toExercise(apiExercise)
    if (exercise) {
      exercises.push(exercise)
    }
  }
  return exercises
}
