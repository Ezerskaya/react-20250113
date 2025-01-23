import { restaurants } from '../../../data/mock.js'
import { Restaurant } from '../restaurant/Restaurant.jsx'
import { RestaurantsTabs } from '../restaurants-tabs/RestaurantsTabs.jsx'
import { useTabs } from '../hooks/tabs.js'

export const Restaurants = () => {
  const { activeTab, onTabChange } = useTabs(restaurants)

  return (
    <div>
      <RestaurantsTabs listRestaurants={restaurants} onTabChange={onTabChange}/>
      <div style={{ display: 'flex', marginBottom: '2rem' }}>
        {restaurants.map((restaurant, index) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} isActiveTab={activeTab === restaurant.id}
                        index={index}/>
          )
        )}
      </div>
    </div>
  )
}