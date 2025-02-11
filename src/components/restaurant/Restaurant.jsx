import { use } from 'react'
import { AuthContext } from '../auth-context/index.js'
import { RestaurantMenu } from '../restaurant-menu/RestaurantMenu.jsx'
import { ReviewForm } from '../review-form/ReviewForm.jsx'
import { RestaurantReviews } from '../restaurant-reviews/RestaurantReviews.jsx'
import styles from './restaurant.module.css'

export const Restaurant = ({ name, menu, reviewsId }) => {
  const { auth } = use(AuthContext)

  if (!name) {
    return null
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}><u>{name}</u></h2>
      {menu.length ?
        (
          <RestaurantMenu menu={menu}/>
        ) : (
          <p>Menu in progress!</p>
        )
      }
      {reviewsId.length ?
        (
          <RestaurantReviews reviewsId={reviewsId}/>
        ) : (
          <p>Not yet</p>
        )
      }
      {auth && <ReviewForm/>}
    </div>
  )
}
