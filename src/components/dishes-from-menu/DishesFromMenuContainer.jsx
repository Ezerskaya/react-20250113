import { useSelector } from 'react-redux'
import { DishesFromMenu } from './DishesFromMenu'
import { selectDishById } from '../redux/entities/dishes/slice.js'

export const DishesFromMenuContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id))

  const { name, ingredients, price } = dish || {}

  return (
    <DishesFromMenu name={name} ingredients={ingredients} price={price}/>
  )
}