import type { Exercise } from '../types'
import ExerciseItem from './ExerciseItem'

type ExerciseListProps = {
  exercises: Exercise[]
}

// Affiche toute la liste : un ExerciseItem pour chaque exercice
function ExerciseList({ exercises }: ExerciseListProps) {
  return (
    <ul className="exercise-list">
      {exercises.map((exercise) => (
        <ExerciseItem key={exercise.id} exercise={exercise} />
      ))}
    </ul>
  )
}

export default ExerciseList
