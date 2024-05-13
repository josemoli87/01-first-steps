export interface PokemonsResponse {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface Result {
  id: string
  name: string
}
