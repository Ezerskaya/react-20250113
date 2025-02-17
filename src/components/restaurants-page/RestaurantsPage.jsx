import { useSelector } from 'react-redux'
import { selectRestaurantIds } from '../.././redux/entities/restaurant/slice.js'
import { RestaurantsTabContainer} from '../restaurants-tab/RestaurantsTabContainer.jsx'
import { Outlet } from 'react-router'
import { Tabs } from '../tabs/Tabs.jsx'

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantIds)

  return (
    <Tabs>
      {restaurantsIds.map((id) => (
        <RestaurantsTabContainer key={id} id={id}/>
      ))}
      <Outlet/>
    </Tabs>
  )
}