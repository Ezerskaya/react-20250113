import { useParams } from 'react-router'
import { RestaurantReviews } from '../components/restaurant-reviews/RestaurantReviews.jsx'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../redux/entities/restaurants/slice.js'
import { useRequest } from '../redux/entities/hook/use-request.js'
import { getReviews } from '../redux/entities/reviews/get-reviews.js'
import { getUsers } from '../redux/entities/users/get-users.js'

import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from '../redux/entities/constants.js'

export const ReviewsPage = () => {
  const { restaurantId } = useParams()
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
  const { reviews } = restaurant || {}

  const reviewsRequestStatus = useRequest(getReviews, restaurantId)
  const usersRequestStatus = useRequest(getUsers, restaurantId)

  if (reviewsRequestStatus === REQUEST_STATUS_PENDING ||
    usersRequestStatus === REQUEST_STATUS_PENDING) {
    return 'loading...'
  }

  if (reviewsRequestStatus === REQUEST_STATUS_REJECTED ||
    usersRequestStatus === REQUEST_STATUS_REJECTED) {
    return 'error...'
  }

  return reviews.length ?
    (
      <RestaurantReviews reviewsId={reviews}/>
    ) : (
      <p>Not yet</p>
    )
}
