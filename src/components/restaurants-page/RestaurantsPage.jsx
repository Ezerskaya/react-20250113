import { useDispatch, useSelector } from 'react-redux'
import { selectGetRestaurantsRequestStatus, selectRestaurantIds } from '../../redux/entities/restaurants/slice.js'
import { RestaurantsTabContainer } from '../restaurants-tab/RestaurantsTabContainer.jsx'
import { Outlet } from 'react-router'
import { Tabs } from '../tabs/Tabs.jsx'
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants.js'
import { useEffect } from 'react'
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED
} from '../../redux/entities/constants.js'

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantIds)
  const dispatch = useDispatch()
  const requestStatus = useSelector(selectGetRestaurantsRequestStatus)

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

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