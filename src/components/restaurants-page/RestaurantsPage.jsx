import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurantIds } from '../redux/entities/restaurant/slice.js'
import { RestaurantContainer } from '../restaurant/RestaurantContainer.jsx'
import { RestaurantTabContainer } from '../restaurant-tab/RestaurantTabContainer.jsx'

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantIds)

  const [activeRestaurantTab, setActiveRestaurantTab] = useState(restaurantsIds?.[0])

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantTab === id) {
      return;
    }
    setActiveRestaurantTab(id)
  };

  return (
    <>
      {restaurantsIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          id={id}
          onClick={() => handleSetActiveRestaurantId(id)}
          isActive={activeRestaurantTab === id}
        />
      ))}
      <div>
        {activeRestaurantTab && (
          <RestaurantContainer id={activeRestaurantTab} />
        )}
      </div>
    </>
  )
}