import { Counter } from '../counter/Counter.jsx'
import { useCounter } from '../counter/use-count.js'

export const DishCounter = ({ dishId }) => {
  const { amount, onIncrement, onDecrement } = useCounter(dishId)

  return (
    <Counter count={amount} onDecrement={onDecrement} onIncrement={onIncrement}/>
  )
}