export const RestaurantReviews = ({restaurant}) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {restaurant.reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}