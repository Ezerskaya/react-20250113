import { useParams } from 'react-router'
import { DishesFromMenuContainer } from '../components/dishes-from-menu/DishesFromMenuContainer.jsx'
import { useRequest } from '../redux/entities/hook/use-request.js'
import { REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from '../redux/entities/constants.js'
import { getDishById } from '../redux/entities/dishById/dish-by-id.js'

export const DishPage = () => {
  const { dishId } = useParams()

  const requestStatus = useRequest(getDishById, dishId)

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return 'loading...'
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'error...'
  }

  return <DishesFromMenuContainer id={dishId}/>
}
