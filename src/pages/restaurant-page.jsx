import { useParams } from 'react-router'
import { RestaurantContainer } from '../components/restaurant/RestaurantContainer.jsx'

export const RestaurantPage = () => {
  const { restaurantId } = useParams()
  return <RestaurantContainer id={restaurantId} />
}