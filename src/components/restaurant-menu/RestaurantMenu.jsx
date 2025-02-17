import styles from './restaurantMenu.module.css'
import { DishesFromMenuContainer } from '../dishes-from-menu/DishesFromMenuContainer.jsx'

export const RestaurantMenu = ({ menu }) => {

  return (
    <div className={styles.wrapper}>
      {menu.map((dishId) => (
        <DishesFromMenuContainer key={dishId} id={dishId}/>
      ))}
    </div>
  )
}