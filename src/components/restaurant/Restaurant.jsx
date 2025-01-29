import { RestaurantReviews } from '../restaurant-reviews/RestaurantReviews.jsx'
import { RestaurantMenu } from '../restaurant-menu/RestaurantMenu.jsx'
import { ReviewForm } from '../review-form/ReviewForm.jsx'
import styles from './restaurant.module.css'

export const Restaurant = ({ restaurant }) => {
  const { id, name } = restaurant

  return (
    <div key={id} className={styles.card}>
      <h2 className={styles.title}><u>{name}</u></h2>
      <RestaurantMenu restaurant={restaurant}/>
      <RestaurantReviews restaurant={restaurant}/>
      <ReviewForm/>
    </div>
  )
}