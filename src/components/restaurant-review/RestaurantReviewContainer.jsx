import { useSelector } from 'react-redux'
import { selectReviewById } from '../redux/entities/reviews/slice.js'
import { selectUserById } from '../redux/entities/users/slice.js'
import { RestaurantReview } from './RestaurantReview'

export const RestaurantReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id))
  const { userId, text } = review || {}
  const user = useSelector((state) => selectUserById(state, userId))
  const { name } = user || {}

  return (
    <RestaurantReview name={name} text={text}/>
  )
}