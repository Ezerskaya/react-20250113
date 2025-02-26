import { Outlet } from 'react-router'
import { Tabs } from '../tabs/Tabs.jsx'
import { useGetRestaurantsQuery } from '../../redux/services/api/api.js'
import { TabLink } from '../tab-link/TabLink.jsx'

export const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery()

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
    <Tabs>
      {data.map(({ id, name }) => (
        <TabLink key={id} to={`/restaurants/${id}`}>{name}</TabLink>
      ))}
      <Outlet/>
    </Tabs>
  )
}