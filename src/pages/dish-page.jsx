import { useParams } from 'react-router'
import { DishesFromMenuContainer } from '../components/dishes-from-menu/DishesFromMenuContainer.jsx'

export const DishPage = () => {
  const { dishId } = useParams()

  return <DishesFromMenuContainer id={dishId}/>
}
