'use client'
import { useState } from 'react'

interface Props {
  value?: number
}

const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value)

  return (
    <>
      <span className="text-5xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-outline btn-neutral btn-xs m-2"
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="btn btn-outline btn-neutral btn-xs m-2"
        >
          -1
        </button>
      </div>
    </>
  )
}

export default CartCounter
