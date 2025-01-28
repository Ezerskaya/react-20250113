import { DishCounter } from '../dish-counter/DishCounter.jsx'

export const RestaurantMenuItem = ({ item }) => {

  return (
    <li key={item.id}>{item.name}
      <br/>
      <DishCounter/>
    </li>

  )
}