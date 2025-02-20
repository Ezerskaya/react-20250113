import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { RestaurantMenu } from '../components/restaurant-menu/RestaurantMenu.jsx'
import { selectRestaurantById } from '../redux/entities/restaurants/slice.js'
import { useRequest } from '../redux/entities/hook/use-request.js'
import { getDishes } from '../redux/entities/dishes/get-dishes.js'
import { REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from '../redux/entities/constants.js'

export const MenuPage = () => {
  const { restaurantId } = useParams()
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
  const { menu } = restaurant || {}

  const requestStatus = useRequest(getDishes, restaurantId)

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return 'loading...'
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'error...'
  }

  return menu.length ?
    (
      <RestaurantMenu menu={menu}/>
    ) : (
      <p>Menu in progress!</p>
    )
}