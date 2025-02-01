import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.jsx'
import { Layout } from '../layout/Layout.jsx'
import { AuthContextProvider } from '../auth-context/auth-context.jsx'

import './reset.css'
import './app.css'

export const App = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <RestaurantsPage/>
      </Layout>
    </AuthContextProvider>
  )
}

