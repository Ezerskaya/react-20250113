import { createSlice } from '@reduxjs/toolkit'
import { normalizedDishes } from '../../../../../data/normalized-mock.js'

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item

    return acc
  }, {}),
}

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  }
})
export const { selectDishById } = dishesSlice.selectors

