
import { useGetDishesByIdQuery } from '../../redux/services/api/api.js'
import { DishesFromMenu } from './DishesFromMenu.jsx'

export const DishesFromMenuContainer = ({id}) => {

  const { data, isError, isLoading } = useGetDishesByIdQuery(id)

  const { name, price } = data || {}

  if (isLoading) {
    return 'loading...'
  }

  if (isError) {
    return 'error'
  }

  if (!data?.name) {
    return null
  }
  return (
    <DishesFromMenu name={name} price={price} />
  )
}