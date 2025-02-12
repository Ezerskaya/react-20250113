import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.jsx'
import { Layout } from '../layout/Layout.jsx'
import { AuthContextProvider } from '../auth-context/auth-context.jsx'
import { ThemeContextProvider } from '../theme-context/theme-context.jsx'
import { Provider } from 'react-redux'
import { store } from '../redux/store.js'

import './reset.css'
import './app.css'

export const App = () => {

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <RestaurantsPage/>
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>

  )
}

