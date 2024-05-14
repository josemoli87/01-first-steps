import * as React from '@/src/pokemons'

interface Props {
  params: {
    id: string
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
