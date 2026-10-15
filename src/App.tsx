import ExerciseList from './components/ExerciseList'
import exercises from './data/exercises.json'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>Gym Exercises Explorer</h1>
      <ExerciseList exercises={exercises} />
    </main>
  )
}

export default App
