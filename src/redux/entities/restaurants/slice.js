import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getRestaurants } from './get-restaurants.js'
import { getRestaurantById } from '../restaurantById/get-restaurant-by-id.js'

const entityAdapter = createEntityAdapter()
export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState(),

  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectGetRestaurantsRequestStatus: (state) => state.getRestaurantsRequestStatus,
    selectRestaurantById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload)
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
})

const selectRestaurantsSlice = (state) => state.restaurants

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantIds,
} = entityAdapter.getSelectors(selectRestaurantsSlice)

