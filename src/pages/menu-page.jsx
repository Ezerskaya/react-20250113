import { useParams } from 'react-router'
import { RestaurantMenu } from '../components/restaurant-menu/RestaurantMenu.jsx'

export const MenuPage = () => {
  const { restaurantId } = useParams()

  return <RestaurantMenu restaurantId={restaurantId}/>
}