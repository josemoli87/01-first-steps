import { SimplePokemon } from '../interfaces/simple-pokemon'
import PokemonCard from './PokemonCard'

interface Props {
  pokemons: SimplePokemon[]
}

const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className='flex flex-wrap gap-8 justify-center items-center text-center'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonGrid
