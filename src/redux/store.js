import { configureStore } from '@reduxjs/toolkit'
import { restaurantSlice } from './entities/restaurants/slice.js'
import { dishesSlice } from './entities/dishes/slice.js'
import { reviewsSlice } from './entities/reviews/slice.js'
import { usersSlice } from './entities/users/slice.js'
import { cartSlice } from './entities/cart/slice.js'
import { requestSlice } from './entities/request/slice.js'

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat((store) => (next) => (action) => {
      console.log(store)
      console.log(action)

      return next(action)
    }),
})
