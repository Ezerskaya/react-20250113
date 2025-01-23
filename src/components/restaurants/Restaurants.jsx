import { restaurants } from '../../../data/mock.js'
import { Restaurant } from '../restaurant/Restaurant.jsx'
import { RestaurantsTabs } from '../restaurants-tabs/RestaurantsTabs.jsx'
import { useTabs } from '../hooks/tabs.js'

export const Restaurants = () => {
  const { activeTab, onTabChange } = useTabs(restaurants)

  const activeRestaurant = restaurants.find((restaurant) => restaurant.id === activeTab)

  return (
    <div>
      <RestaurantsTabs listRestaurants={restaurants} onTabChange={onTabChange}/>
      <div style={{ display: 'flex', marginBottom: '2rem' }}>
        {activeRestaurant && (
          <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant}/>
        )}
      </div>
    </div>
  )
}