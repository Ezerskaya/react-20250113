import { useSelector } from 'react-redux'
import { DishesFromMenu } from './DishesFromMenu'
import { selectDishById } from '../../redux/entities/dishes/slice.js'
import { NavLink } from 'react-router'

export const DishesFromMenuContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id))

  const { name, ingredients, price } = dish || {}

  return (
    <NavLink to={`/dish/${id}`}
             style={({ isActive }) => {
               return {
                 textDecoration: 'none',
                 fontWeight: isActive ? 'bold' : '',
               }
             }}
    >
      <DishesFromMenu name={name} ingredients={ingredients} price={price} id={id}/>
    </NavLink>

  )
}