import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount((prevCount) => prevCount < 5 ? prevCount + 1 : prevCount)
  }

  const onDecrement = () => {
    setCount((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount)
  }

  return {
    count,
    onIncrement,
    onDecrement
  }
}
