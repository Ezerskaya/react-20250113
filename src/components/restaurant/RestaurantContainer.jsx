import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurants/slice.js'
import { Restaurant } from './Restaurant.jsx'

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))
  const { name, reviews, menu, img, description } = restaurant || {}

  return (<Restaurant name={name}
                      reviewsId={reviews}
                      menu={menu} id={id} cover={img}
                      description={description}
    />)
}