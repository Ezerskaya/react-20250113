import { useCounter } from './use-count.js'

export const Counter = () => {
  const { count, onIncrement, onDecrement } = useCounter()

  return (
    <div>
      <button onClick={onIncrement}>+</button>
      {count}
      <button onClick={onDecrement}>-</button>
    </div>
  )
}