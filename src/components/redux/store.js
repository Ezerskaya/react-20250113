import { configureStore } from '@reduxjs/toolkit'
import { restaurantSlice } from './entities/restaurant/slice.js'
import { dishesSlice } from './entities/dishes/slice.js'
import { reviewsSlice } from './entities/reviews/slice.js'
import { usersSlice } from './entities/users/slice.js'

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  }
})
