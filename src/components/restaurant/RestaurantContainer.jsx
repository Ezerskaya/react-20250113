import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../redux/entities/restaurant/slice.js'
import { Restaurant } from './Restaurant.jsx'

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id))
  const { name, reviews, menu } = restaurant || {}

  return (
    <Restaurant name={name} reviewsId={reviews} menu={menu}/>
  )
}