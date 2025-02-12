import { createSlice } from '@reduxjs/toolkit'
import { normalizedRestaurants } from '../../../../../data/normalized-mock.js'

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item

    return acc
  }, {}),
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  }
})

export const {
  selectRestaurantIds,
  selectRestaurantById } =
  restaurantSlice.selectors