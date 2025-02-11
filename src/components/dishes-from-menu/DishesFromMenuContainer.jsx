import { useSelector } from 'react-redux'
import { DishesFromMenu } from './DishesFromMenu'
import { selectDishesById } from '../redux/entities/dishes/slice.js'

export const DishesFromMenuContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishesById(state, id))

  const { name, ingredients, price } = dish || {}

  return (
    <DishesFromMenu name={name} ingredients={ingredients} price={price}/>
  )
}