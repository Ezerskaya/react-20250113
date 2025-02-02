import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.jsx'
import { Layout } from '../layout/Layout.jsx'
import { AuthContextProvider } from '../auth-context/auth-context.jsx'
import { ThemeContextProvider } from '../theme-context/theme-context.jsx'

import './reset.css'
import './app.css'

export const App = () => {

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          <RestaurantsPage/>
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  )
}

