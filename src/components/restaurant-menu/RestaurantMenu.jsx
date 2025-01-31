import { DishesFromMenu } from '../dishes-from-menu/DishesFromMenu.jsx'
import styles from './restaurantMenu.module.css'
export const RestaurantMenu = ({ restaurant }) => {

  return (
    <div>
      <h3 className={styles.title}>Menu</h3>
      <ul className={styles.wrapper}>
        {restaurant.menu.map((item) => (
          <DishesFromMenu key={item.id} item={item}/>
        ))}
      </ul>
    </div>
  )
}