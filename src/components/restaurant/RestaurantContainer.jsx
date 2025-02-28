import { Restaurant } from './Restaurant.jsx'
import { useAddReviewMutation, useGetRestaurantsQuery } from '../../redux/services/api/api.js'
import { use, useCallback } from 'react'
import { AuthContext } from '../auth-context/index.js'
import { INITIAL_VALUE } from "../../constants/constants.js"

export const RestaurantContainer = ({ restaurantId }) => {

  const { data, isFetching, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find(({ id }) => id === restaurantId),
    }),
  })

  const { auth } = use(AuthContext)

  const [addReview, { isLoading }] = useAddReviewMutation()

  const handleAddReview = useCallback((review) => {
      addReview({
        restaurantId,
        review: {
          ...review,
          userId: auth.userId
        },
      })
    },
    [addReview, restaurantId, auth.userId]
  )

  if (isFetching) {
    return 'loading...'
  }

  if (isError) {
    return 'error'
  }

  if (!data) {
    return null
  }

  const { name, reviews, menu, img, description } = data || {}

  return (
    <Restaurant name={name}
                reviewsId={reviews}
                menu={menu} id={restaurantId} cover={img}
                description={description}
                addReview={handleAddReview}
                addReviewLoading={isLoading}
    />
  )
}