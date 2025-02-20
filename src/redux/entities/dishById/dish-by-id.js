import { createAsyncThunk } from '@reduxjs/toolkit'
import { selectDishById } from '../dishes/slice.js'

export const getDishById = createAsyncThunk(
  'dish/getDishById',
  async (dishId, { rejectWithValue }) => {
    const response =
      await fetch(`http://localhost:3001/api/dish/${dishId}`)

    const result = await response.json()
    if (!result || Object.keys(result).length === 0) {
      rejectWithValue('no dishes found')
      return
    }

    return result
  },
  {
    condition: (dishId, { getState }) => {
      const existingDish = selectDishById(getState(), dishId)
      return !existingDish
    },
  }
)
