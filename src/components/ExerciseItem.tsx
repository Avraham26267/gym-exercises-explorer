import type { Exercise } from '../types'

type ExerciseItemProps = {
  exercise: Exercise
}

// Affiche UN exercice de la liste : son nom et sa catégorie
function ExerciseItem({ exercise }: ExerciseItemProps) {
  return (
    <li className="exercise-item">
      <span className="exercise-name">{exercise.name}</span>
      <span className="exercise-category">{exercise.category}</span>
    </li>
  )
}

export default ExerciseItem
