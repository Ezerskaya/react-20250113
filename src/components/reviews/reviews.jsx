import styles from './reviews.module.css'
import { Review } from '../review/Review.jsx'

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {reviews?.map(({ text, id, userId }) => (
          <li key={id}>
            <Review text={text} userId={userId}/>
          </li>
        ))}
      </ul>
    </div>
  )
}