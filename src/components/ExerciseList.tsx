import type { Exercise } from '../types'
import ExerciseItem from './ExerciseItem'

type ExerciseListProps = {
  exercises: Exercise[]
  selectedId: number | null
  onSelect: (exercise: Exercise) => void
}

// Affiche toute la liste : un ExerciseItem pour chaque exercice
function ExerciseList({ exercises, selectedId, onSelect }: ExerciseListProps) {
  return (
    <ul className="exercise-list">
      {exercises.map((exercise) => (
        <ExerciseItem
          key={exercise.id}
          exercise={exercise}
          isSelected={exercise.id === selectedId}
          onSelect={onSelect}
        />
      ))}
    </ul>
  )
}

export default ExerciseList
