import { Counter } from '../counter/Counter.jsx'

export const RestaurantMenu = ({ restaurant }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((item) => (
          <li key={item.id}>{item.name} <br/> <Counter/></li>
        ))}
      </ul>
    </div>
  )
}