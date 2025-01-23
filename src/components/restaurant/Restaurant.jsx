import { Counter } from '../counter/Counter.jsx'

export const Restaurant = ({ restaurant, isActiveTab }) => {
  const { id, name } = restaurant

  if (!restaurant.reviews.length) {
    return 'There are no reviews'
  }

  const cardStyle = {
    display: isActiveTab ? 'block' : 'none',
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#EFF2F1',
    outline: '0.1rem solid',
  }

  return (
    <div key={id} style={cardStyle}>
      <h2>{name}</h2>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((item) => (
          <li key={item.id}>{item.name} <br/> <Counter/></li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurant.reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}