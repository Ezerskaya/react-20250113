import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { getRestaurants } from './get-restaurants.js'
import { REQUEST_STATUS_FULFILLED, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from '../constants.js'

const entityAdapter = createEntityAdapter()

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({
    getRestaurantsRequestStatus: 'idle',
  }),
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectGetRestaurantsRequestStatus: (state) => state.getRestaurantsRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.getRestaurantsRequestStatus = REQUEST_STATUS_PENDING
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.getRestaurantsRequestStatus = REQUEST_STATUS_REJECTED
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        // state.ids = payload.map(({ id }) => id)
        // state.entities = payload.reduce((acc, item) => {
        //   acc[item.id] = item
        //
        //   return acc
        // })
        entityAdapter.setAll(state, payload)
        state.getRestaurantsRequestStatus = REQUEST_STATUS_FULFILLED
      })
})

const selectRestaurantsSlice = (state) => state.restaurants

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantIds,
} = entityAdapter.getSelectors(selectRestaurantsSlice)

export const { selectGetRestaurantsRequestStatus } = restaurantSlice.selectors