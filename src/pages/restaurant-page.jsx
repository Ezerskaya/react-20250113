import { useParams } from 'react-router'
import { RestaurantContainer } from '../components/restaurant/RestaurantContainer.jsx'
import { useRequest } from '../redux/entities/hook/use-request.js'
import { getRestaurantById } from '../redux/entities/restaurantById/get-restaurant-by-id.js'
import { REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from '../redux/entities/constants.js'

export const RestaurantPage = () => {
  const { restaurantId } = useParams()

  const requestStatus = useRequest(getRestaurantById, restaurantId)

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return 'loading...'
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'error...'
  }

  return <RestaurantContainer id={restaurantId}/>
}