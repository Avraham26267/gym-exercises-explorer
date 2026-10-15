import type { Exercise } from '../types'

type ExerciseDetailsProps = {
  exercise: Exercise | null
}

// Transforme une liste en texte : ["A", "B"] → "A, B" (ou "—" si la liste est vide)
function listToText(items: string[]): string {
  return items.length > 0 ? items.join(', ') : '—'
}

// Affiche les détails de l'exercice choisi (ou un message si aucun n'est choisi)
function ExerciseDetails({ exercise }: ExerciseDetailsProps) {
  if (exercise === null) {
    return (
      <section className="exercise-details">
        <p>Choisis un exercice dans la liste.</p>
      </section>
    )
  }

  return (
    <section className="exercise-details">
      <h2>{exercise.name}</h2>
      {exercise.imageUrl && (
        <img className="exercise-image" src={exercise.imageUrl} alt={exercise.name} />
      )}
      <p>
        <strong>Catégorie :</strong> {exercise.category}
      </p>
      <p>
        <strong>Muscles :</strong> {listToText(exercise.muscles)}
      </p>
      <p>
        <strong>Matériel :</strong> {listToText(exercise.equipment)}
      </p>
      {exercise.description && <p>{exercise.description}</p>}
    </section>
  )
}

export default ExerciseDetails
