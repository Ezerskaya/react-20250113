import { configureStore } from '@reduxjs/toolkit'
import { restaurantSlice } from './entities/restaurants/slice.js'
import { dishesSlice } from './entities/dishes/slice.js'
import { reviewsSlice } from './entities/reviews/slice.js'
import { usersSlice } from './entities/users/slice.js'
import { cartSlice } from './entities/cart/slice.js'
import { requestSlice } from './entities/request/slice.js'
import { apiSlice } from './services/api/api.js'

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log(action)
  console.log(store)

  return next(action);
}

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [restaurantSlice.name]: restaurantSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleWare, apiSlice.middleware),
})
