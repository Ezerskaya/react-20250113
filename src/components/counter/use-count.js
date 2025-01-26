import { useState } from 'react'

export const useCounter = ({min = 0, max = 5} = {}) => {
  const [count, setCount] = useState(min)

  const onIncrement = () => setCount(Math.min(count + 1, max));

  const onDecrement = () => setCount(Math.max(count - 1, min));

  return {
    count,
    onIncrement,
    onDecrement
  }
}
