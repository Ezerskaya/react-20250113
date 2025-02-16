import styles from './restaurantReviews.module.css'
import { RestaurantReviewContainer } from '../restaurant-review/RestaurantReviewContainer.jsx'

export const RestaurantReviews = ({ reviewsId }) => {
  const checkEmptyReviews = reviewsId.length !== 0

  return (
    <div className={styles.wrapper}>
      <ul>
        {checkEmptyReviews ?
          (reviewsId.map((reviewId) => (
            <RestaurantReviewContainer key={reviewId} id={reviewId}/>
          ))) : (<b>No reviews yet!</b>)
        }
      </ul>
    </div>
  )
}