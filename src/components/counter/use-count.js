import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectAmountByItemId } from '../../redux/entities/cart/slice.js'

export const useCounter = (dishId) => {
  const dispatch = useDispatch()

  const amount = useSelector((state) => selectAmountByItemId(state, dishId) || 0)

  const onIncrement = useCallback(
    () => dispatch(addToCart(dishId)),
    [dishId, dispatch]
  )

  const onDecrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dishId, dispatch]
  )

  return {
    amount,
    onIncrement,
    onDecrement
  }
}
