import { use } from 'react'
import { DishCounter } from '../dish-counter/DishCounter.jsx'
import styles from './DishesFromMenu.module.css'
import { AuthContext } from '../auth-context'
import { ThemeContext } from '../theme-context'

export const DishesFromMenu = ({ item }) => {
  const { auth } = use(AuthContext)
  const { theme } = use(ThemeContext)

  return (
    <li className={styles.wrapper}>
      <img src={'./dish-default.png'}
           className={theme === 'dark' ? styles.imageDarkTheme: styles.themeIcon}
           alt="dish default"
      />
      <p className={styles.nameDish}>{item.name}</p>
      {auth && <DishCounter/>}
    </li>
  )
}