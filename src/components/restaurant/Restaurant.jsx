import { RestaurantReviews } from '../restaurant-reviews/RestaurantReviews.jsx'
import { RestaurantMenu } from '../restaurant-menu/RestaurantMenu.jsx'
import { ReviewForm } from '../review-form/ReviewForm.jsx'
import styles from './restaurant.module.css'
import { use } from 'react'
import { AuthContext } from '../auth-context/index.js'

export const Restaurant = ({ restaurant }) => {
  const { auth } = use(AuthContext)

  return (
    <div className={styles.card}>
      <h2 className={styles.title}><u>{restaurant.name}</u></h2>
      <RestaurantMenu restaurant={restaurant}/>
      <RestaurantReviews restaurant={restaurant}/>
      {auth && <ReviewForm/>}
    </div>
  )
}
