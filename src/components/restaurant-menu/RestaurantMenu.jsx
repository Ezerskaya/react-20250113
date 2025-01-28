import { RestaurantMenuItem } from './RestaurantMenuItem.jsx'

export const RestaurantMenu = ({ restaurant }) => {

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((item) => (
          <RestaurantMenuItem key={item.id} item={item}/>
        ))}
      </ul>
    </div>
  )
}