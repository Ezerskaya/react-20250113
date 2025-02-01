import { DishCounter } from '../dish-counter/DishCounter.jsx'
import styles from './DishesFromMenu.module.css'
import { AuthContext } from '../auth-context'
import { use } from 'react'

export const DishesFromMenu = ({ item }) => {
  const { auth } = use(AuthContext)
  return (
    <li className={styles.wrapper}>
      <img src={'./dish-default.png'} className={styles.imageDish} alt="dish default"/>
      <p className={styles.nameDish}>{item.name}</p>
      {auth && <DishCounter/>}
    </li>
  )
}