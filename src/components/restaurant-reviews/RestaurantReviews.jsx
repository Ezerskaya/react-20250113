export const RestaurantReviews = ({ restaurant }) => {

  const checkEmptyReviews = restaurant.reviews.length !== 0

  return (
    <div>
      <h3>Reviews</h3>
      {checkEmptyReviews ? (<ul>
        {restaurant.reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>) : (
          <p>No reviews</p>
      )}
      <ul>
        {restaurant.reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}