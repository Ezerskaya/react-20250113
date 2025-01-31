import { restaurants } from '../../../data/mock.js'
import { Restaurant } from '../restaurant/Restaurant.jsx'
import { RestaurantsTabs } from '../restaurants-tabs/RestaurantsTabs.jsx'
import { useState } from 'react'

export const RestaurantsPage = () => {
  const [activeRestaurantTab, setActiveRestaurantTab] = useState(restaurants?.[0]?.id)

  const activeRestaurant = restaurants.find((restaurant) => restaurant.id === activeRestaurantTab)

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantTab === id) {
      return
    }
    setActiveRestaurantTab(id)
  }

  return (
    <>
      {restaurants?.map((item) => (
        <RestaurantsTabs
          key={item.id}
          title={item.name}
          onClick={() => handleSetActiveRestaurantId(item.id)}
          isActive={activeRestaurantTab === item.id}
        />
      ))}
      <div>
        {activeRestaurant && (
          <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant}/>
        )}
      </div>
    </>
  )
}