import { RestaurantReviews } from '../restaurant-reviews/RestaurantReviews.jsx'
import { RestaurantMenu } from '../restaurant-menu/RestaurantMenu.jsx'

const cardStyle = {
  width: '100%',
  padding: '0.5rem',
  backgroundColor: '#EFF2F1',
  outline: '0.1rem solid',
}

export const Restaurant = ({ restaurant, isActiveTab }) => {
  const { id, name } = restaurant

  if (!restaurant.reviews.length) {
    return 'There are no reviews'
  }

  return (
    <div key={id} style={{ ...cardStyle, display: isActiveTab ? 'block' : 'none',}}>
      <h2>{name}</h2>
      <RestaurantMenu restaurant={restaurant}/>
      <RestaurantReviews restaurant={restaurant}/>
    </div>
  )
}