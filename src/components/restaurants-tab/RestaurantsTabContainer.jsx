import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.js'
import { TabLink } from '../tab-link/TabLink.jsx'

export const RestaurantsTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))

  if (!restaurant) {
    return
  }

  return (
    <TabLink to={`/restaurants/${id}`}>{restaurant.name}</TabLink>
  )
}
