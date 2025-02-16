import { useParams } from 'react-router'
import { RestaurantReviews } from '../components/restaurant-reviews/RestaurantReviews.jsx'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../redux/entities/restaurant/slice.js'

export const ReviewsPage = () => {
  const { restaurantId } = useParams()
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
  const { reviews } = restaurant || {}

  return reviews.length ?
    (
      <RestaurantReviews reviewsId={reviews}/>
    ) : (
      <p>Not yet</p>
    )
}
