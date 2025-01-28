import { RestaurantReviews } from '../restaurant-reviews/RestaurantReviews.jsx'
import { RestaurantMenu } from '../restaurant-menu/RestaurantMenu.jsx'
import { ReviewForm } from '../review-form/ReviewForm.jsx'

const cardStyle = {
  display: 'block',
  width: '100%',
  padding: '0.5rem',
  backgroundColor: '#EFF2F1',
  outline: '0.1rem solid',
}

export const Restaurant = ({ restaurant }) => {
  const { id, name } = restaurant

  return (
    <div key={id} style={cardStyle}>
      <h2>{name}</h2>
      <RestaurantMenu restaurant={restaurant}/>
      <RestaurantReviews restaurant={restaurant}/>
      <ReviewForm/>
    </div>
  )
}