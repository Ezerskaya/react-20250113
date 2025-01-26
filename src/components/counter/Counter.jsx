export const Counter = ({count, onIncrement, onDecrement }) => {

  return (
    <div>
      <button onClick={onIncrement}>+</button>
      {count}
      <button onClick={onDecrement}>-</button>
    </div>
  )
}