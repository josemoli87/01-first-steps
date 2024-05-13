import Link from 'next/link'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import Image from 'next/image'
import { IoHeartOutline } from 'react-icons/io5'

interface Props {
  pokemon: SimplePokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon
  return (
    <div className='card mx-auto w-50 border mt-2 border-blue-500 shadow-xs'>
      <div className='card-body items-center text-center'>
        <Image
          key={pokemon.id}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          width={100}
          height={100}
          alt={pokemon.name}
          priority={false}
        />
        <h2 className='card-title capitalize'>{name}</h2>
        <div>
          <IoHeartOutline className='text-red-500' />
        </div>
        <p className='text-xs font-medium text-gray-800 '>No es Favorito</p>
        <div className='card-actions'>
          <Link href='/' className='btn btn-primary'>
            Detalles:
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
