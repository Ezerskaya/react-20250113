import { Counter } from '../counter/Counter.jsx'
import { useCounter } from '../counter/use-count.js'

export const DishCounter = () => {
  const { count, onIncrement, onDecrement } = useCounter()

  return (
    <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement}/>
  )
}