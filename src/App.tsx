import { useState } from 'react'
import ExerciseList from './components/ExerciseList'
import ExerciseDetails from './components/ExerciseDetails'
import exercises from './data/exercises.json'
import type { Exercise } from './types'
import './App.css'

function App() {
  // La mémoire de l'appli : quel exercice est choisi (au début, aucun)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)

  return (
    <main className="app">
      <h1>Gym Exercises Explorer</h1>
      <div className="layout">
        <ExerciseList
          exercises={exercises}
          selectedId={selectedExercise ? selectedExercise.id : null}
          onSelect={setSelectedExercise}
        />
        <ExerciseDetails exercise={selectedExercise} />
      </div>
    </main>
  )
}

export default App
