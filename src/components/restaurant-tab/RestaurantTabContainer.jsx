import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../redux/entities/restaurant/slice.js'
import { Button } from '../button/Button.jsx'
import styles from './restaurantsTabsContainer.module.css'

export const RestaurantTabContainer = ({ title, isActive, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, title))

  if (!restaurant) {
    return
  }

  return (
    <Button
      title={restaurant.name}
      onClick={onClick}
      disabled={isActive}
      viewVariant={'contained'}
      className={styles.tab}/>
  )
}
