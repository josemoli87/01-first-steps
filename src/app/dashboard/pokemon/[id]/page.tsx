import * as React from '@/src/pokemons'
import { Metadata } from 'next'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await getPokemon(params.id)

  return {
    title: `- ${name}`,
    description: `Pagina del pokemon ${name}`,
  }
}

const getPokemon = async (id: string): Promise<typeof Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
  }).then((res) => res.json())

  console.log('se cargo', pokemon.name)

  return pokemon
}

export default async function Pokemon({ params }: Props) {
  const pokemon = await getPokemon(params.id)
  return (
    <div>
      <h1>Hola Pokemon {params.id}</h1>
      <div>{pokemon.name}</div>
    </div>
  )
}
