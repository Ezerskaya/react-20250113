import { Button } from '../button/Button.jsx'
import styles from './restaurantsTabs.module.css'

export const RestaurantsTabs = ({ onClick, title, isActive }) => {
  return (
    <Button onClick={onClick} disabled={isActive} extraStyles={styles.tab}>
      {title}
    </Button>
  )
}