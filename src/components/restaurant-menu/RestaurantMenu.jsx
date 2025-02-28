import styles from './restaurantMenu.module.css'
import { useGetDishesQuery } from '../../redux/services/api/api.js'
import { Link } from 'react-router'
import { DishesFromMenu } from '../dishes-from-menu/DishesFromMenu.jsx'
import { DishCounter } from '../dish-counter/DishCounter.jsx'
import { use } from 'react'
import { AuthContext } from '../auth-context/index.js'

export const RestaurantMenu = ({ restaurantId }) => {
  const { auth } = use(AuthContext)
  const { data, isLoading, isError } = useGetDishesQuery(restaurantId)

  if (isLoading) {
    return 'loading...'
  }

  if (isError) {
    return 'error'
  }

  if (!data?.length) {
    return null
  }


  return (
    <div className={styles.wrapper}>
      {data.map(({id, name, price}) => (
        <div key={id} className={styles.card}>
          <Link to={`/dish/${id}`}>
            <DishesFromMenu name={name} price={price} />
          </Link>
          {auth && <DishCounter dishId={id}/>}
        </div>
      ))}
    </div>
  )
}