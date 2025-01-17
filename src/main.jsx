import { createRoot } from 'react-dom/client'
import { restaurants } from '../data/mock.js'

const rootElement = document.getElementById('root')
const reactRoot = createRoot(rootElement)

reactRoot.render(
  <ul>
    {restaurants.map((restaurant, index) => (
        <div>
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>
          <ul>
            {restaurant.menu.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <h3>Отзывы</h3>
          <ul>
            {restaurant.reviews.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
          {index !== restaurants.length - 1 && <hr />}
        </div>
      )
    )}
  </ul>
)