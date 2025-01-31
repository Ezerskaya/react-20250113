import { Button } from '../button/Button.jsx'
import styles from './restaurantsTabs.module.css'

export const RestaurantsTabs = ({ onClick, title, isActive }) => {
  return (
    <Button
      onClick={onClick}
      disabled={isActive}
      viewVariant={'contained'}
      className={styles.tab}
      title={title}/>
  )
}