import { Reviews } from './reviews.jsx'
import { useGetRestaurantReviewQuery } from '../../redux/services/api/api.js'

export const ReviewsContainer = ({ restaurantId }) => {
  const {
    data: reviewsData,
    isFetching: reviewsIsFetching,
    isError: reviewsIsError
  } = useGetRestaurantReviewQuery(restaurantId)

  if (reviewsIsFetching) {
    return 'loading...'
  }

  if (reviewsIsError) {
    return 'error...'
  }
  return (
    <Reviews reviews={reviewsData}/>
  )
}