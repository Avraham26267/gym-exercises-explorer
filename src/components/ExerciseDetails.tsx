import type { Exercise } from '../types'

type ExerciseDetailsProps = {
  exercise: Exercise | null
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
      <p>
        <strong>Catégorie :</strong> {exercise.category}
      </p>
      <p>
        <strong>Muscles :</strong> {exercise.muscles.join(', ')}
      </p>
      <p>
        <strong>Matériel :</strong> {exercise.equipment.join(', ')}
      </p>
    </section>
  )
}

export default ExerciseDetails
