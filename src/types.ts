// La forme d'un exercice dans notre appli
export type Exercise = {
  id: number
  name: string
  category: string
  muscles: string[]
  equipment: string[]
  description: string
  imageUrl: string | null
}
