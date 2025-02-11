import styles from './restaurantMenu.module.css'
import { DishesFromMenuContainer } from '../dishes-from-menu/DishesFromMenuContainer.jsx'

export const RestaurantMenu = ({ menu }) => {

  return (
    <div>
      <h3 className={styles.title}>Menu</h3>
      <ul className={styles.wrapper}>
        {menu.map((dish) => (
          <DishesFromMenuContainer key={dish.id} id={dish}/>
        ))}
      </ul>
    </div>
  )
}