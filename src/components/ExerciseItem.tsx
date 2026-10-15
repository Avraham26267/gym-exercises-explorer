import type { Exercise } from '../types'

type ExerciseItemProps = {
  exercise: Exercise
  isSelected: boolean
  onSelect: (exercise: Exercise) => void
}

// Affiche UN exercice de la liste : son nom et sa catégorie.
// Quand on clique dessus, il prévient le parent avec onSelect.
function ExerciseItem({ exercise, isSelected, onSelect }: ExerciseItemProps) {
  return (
    <li>
      <button
        type="button"
        className={isSelected ? 'exercise-item selected' : 'exercise-item'}
        onClick={() => onSelect(exercise)}
      >
        <span className="exercise-name">{exercise.name}</span>
        <span className="exercise-category">{exercise.category}</span>
      </button>
    </li>
  )
}

export default ExerciseItem
