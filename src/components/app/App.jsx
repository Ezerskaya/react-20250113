import { RestaurantsPage } from '../restaurants-page/RestaurantsPage.jsx'
import { Layout } from '../layout/Layout.jsx'

import './reset.css'
import './app.css'

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage/>
    </Layout>
  )
}

