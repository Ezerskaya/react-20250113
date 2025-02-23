import { useSelector } from 'react-redux'
import { selectRestaurantIds } from '../../redux/entities/restaurants/slice.js'
import { RestaurantsTabContainer } from '../restaurants-tab/RestaurantsTabContainer.jsx'
import { Outlet } from 'react-router'
import { Tabs } from '../tabs/Tabs.jsx'
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants.js'
import { useRequest } from '../../redux/entities/hook/use-request.js'
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED
} from '../../redux/entities/constants.js'

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants)
  const restaurantsIds = useSelector(selectRestaurantIds)

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return 'loading...'
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return 'error'
  }

  if (!restaurantsIds.length) {
    return null
  }

  return (
    <Tabs>
      {restaurantsIds.map((id) => (
        <RestaurantsTabContainer key={id} id={id}/>
      ))}
      <Outlet/>
    </Tabs>
  )
}