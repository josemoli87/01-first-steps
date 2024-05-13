import { PokemonsResponse } from '@/app/pokemons'
import PokemonGrid from '@/app/pokemons/components/PokemonGrid'
import Image from 'next/image'

const getPokemons = async (limit = 20, offset = 0) => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json())

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  return pokemons
}

export default async function Pokemons() {
  const pokemons = await getPokemons(151)

  return (
    <div className='card flex flex-col'>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
