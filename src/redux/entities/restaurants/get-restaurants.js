import { createAsyncThunk } from '@reduxjs/toolkit'
import { selectRestaurantIds } from './slice'

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    const response = await fetch('http://localhost:3001/api/restaurants/')

    const result = await response.json()

    if (!result.length) {
      rejectWithValue('no restaurants found')
      return
    }

    return result
  },
  {
    condition: (_, { getState }) => {
      const restaurantIds = selectRestaurantIds(getState());
      return !restaurantIds.length
    },
  }
)
