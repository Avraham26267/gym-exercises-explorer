import { useEffect, useState } from 'react'
import ExerciseList from './components/ExerciseList'
import ExerciseDetails from './components/ExerciseDetails'
import { fetchExercises } from './api'
import type { Exercise } from './types'
import './App.css'

function App() {
  // La mémoire de l'appli
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)

  // Au premier affichage de la page : on va chercher les exercices sur l'API
  useEffect(() => {
    fetchExercises()
      .then((data) => setExercises(data))
      .catch(() => setError("Impossible de charger les exercices. Vérifie ta connexion et recharge la page."))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <main className="app">
      <h1>Gym Exercises Explorer</h1>

      {isLoading && <p>Chargement…</p>}

      {error && <p className="error">{error}</p>}

      {!isLoading && !error && (
        <div className="layout">
          <ExerciseList
            exercises={exercises}
            selectedId={selectedExercise ? selectedExercise.id : null}
            onSelect={setSelectedExercise}
          />
          <ExerciseDetails exercise={selectedExercise} />
        </div>
      )}
    </main>
  )
}

export default App
