import { DishCounter } from '../dish-counter/DishCounter.jsx'

export const RestaurantMenuItem = ({ item }) => {

  return (
    <div>
      <li key={item.id}>{item.name}
        <br/>
        <DishCounter/>
      </li>
    </div>
  )
}