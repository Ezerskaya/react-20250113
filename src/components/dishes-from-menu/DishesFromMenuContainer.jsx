import { useSelector } from 'react-redux'
import { DishesFromMenu } from './DishesFromMenu'
import { selectDishById } from '../../redux/entities/dishes/slice.js'
import { Link } from 'react-router'
import styles from './dishesFromMenuContainer.module.css'
import { DishCounter } from '../dish-counter/DishCounter.jsx'
import { use } from 'react'
import { AuthContext } from '../auth-context/index.js'

export const DishesFromMenuContainer = ({ id }) => {
  const { auth } = use(AuthContext)
  const dish = useSelector((state) => selectDishById(state, id))

  const { name, ingredients, price } = dish || {}

  return (
    <div className={styles.wrapper}>
      <Link to={`/dish/${id}`} className={styles.link}>
        <DishesFromMenu name={name} ingredients={ingredients} price={price} id={id}/>
      </Link>
      {auth && <DishCounter dishId={id}/>}
    </div>
  )
}