import { DishCounter } from '../dish-counter/DishCounter.jsx'
import styles from './DishesFromMenu.module.css'

export const DishesFromMenu = ({ item }) => {

  return (
    <li className={styles.wrapper}>
      <img src={'./dish-default.png'} className={styles.imageDish} alt="dish default"/>
      <p className={styles.nameDish}>{item.name}</p>
      <DishCounter/>
    </li>

  )
}