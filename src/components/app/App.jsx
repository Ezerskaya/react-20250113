import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.jsx'
import { Layout } from '../layout/Layout.jsx'
import { AuthContextProvider } from '../auth-context/auth-context.jsx'
import { ThemeContextProvider } from '../theme-context/theme-context.jsx'
import { Provider } from 'react-redux'
import { store } from '../../redux/store.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import { HomePage } from '../../pages/home-page.jsx'
import { RestaurantPage } from '../../pages/restaurant-page.jsx'
import { DishPage } from '../../pages/dish-page.jsx'
import { MenuPage } from '../../pages/menu-page.jsx'
import { ReviewsPage } from '../../pages/reviews-page.jsx'

import './reset.css'
import './app.css'

export const App = () => {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Routes>
              <Route index element={<HomePage/>}/>
              <Route element={<Layout/>}>
                <Route path="/restaurants" element={<RestaurantsPage/>}>
                  <Route path=":restaurantId" element={<RestaurantPage/>}>
                    <Route index element={<Navigate to={'menu'}/>} />
                    <Route path="menu" element={<MenuPage/>}/>
                    <Route path="reviews" element={<ReviewsPage/>}/>
                  </Route>
                </Route>
                <Route path="/dish/:dishId" element={<DishPage/>}/>
              </Route>
            </Routes>
          </AuthContextProvider>
        </ThemeContextProvider>
      </Provider>
    </BrowserRouter>
  )
}

