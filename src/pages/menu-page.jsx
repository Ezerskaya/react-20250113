import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RestaurantMenu } from '../components/restaurant-menu/RestaurantMenu.jsx'
import { selectRestaurantById } from '../redux/entities/restaurant/slice.js'

export const MenuPage = () => {
  const { restaurantId } = useParams()
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
  const { menu } = restaurant || {}

  return menu.length ?
    (
      <RestaurantMenu menu={menu}/>
    ) : (
      <p>Menu in progress!</p>
    )
}