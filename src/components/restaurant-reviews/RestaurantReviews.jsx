import styles from './restaurantReviews.module.css'
import { RestaurantReviewContainer } from '../restaurant-review/RestaurantReviewContainer.jsx'

export const RestaurantReviews = ({ reviewsId }) => {
  const checkEmptyReviews = reviewsId.length !== 0

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Reviews</h3>
      {checkEmptyReviews ?
        (reviewsId.map((review) => (
          <RestaurantReviewContainer key={review.id} id={review}/>
        ))) : (<b>No reviews yet!</b>)
      }
    </div>
  )
}