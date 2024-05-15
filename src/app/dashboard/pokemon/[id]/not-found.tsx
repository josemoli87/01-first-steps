import Sidebar from '@/src/components/Sidebar'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white'>
      <div className='flex'>
        <div className='w-full text-slate-900'>
          <div className='bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center'>
            <div className='bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl'>
              <p className='text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300'>
                404
              </p>
              <p className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4'>
                Página no encontrada
              </p>
              <p className='text-gray-500 mt-4 pb-4 border-b-2 text-center'>
                Lo sentimos, no se pudo encontrar el Pokemon que estás buscando.
              </p>
              <Link
                href='/dashboard/pokemons'
                className='flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-2 py-2 mt-6 rounded'
                title='Volver a Pokemons'>
                <span>Volver a Pokemons</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
