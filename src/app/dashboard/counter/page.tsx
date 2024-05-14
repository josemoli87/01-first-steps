import CartCounter from '@/src/shopping-cart/components/CartCounter'

export default function Counter() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Contador de Prueba</span>
      <CartCounter />
    </div>
  )
}
