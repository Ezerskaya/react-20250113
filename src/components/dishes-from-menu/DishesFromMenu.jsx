import { use } from 'react'
import styles from './DishesFromMenu.module.css'
import { ThemeContext } from '../theme-context'

export const DishesFromMenu = ({ price, name }) => {
  const { theme } = use(ThemeContext)

  return (
    <div className={styles.wrapper}>
      <img src={'/public/dish-default.png'}
           className={theme === 'dark' ? styles.imageDarkTheme : styles.themeIcon}
           alt="dish default"
      />
      <p className={styles.nameDish}>{name} <span>{price}$</span></p>
    </div>
  )
}