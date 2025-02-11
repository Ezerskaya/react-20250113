export const RestaurantReview = ({name, text}) => {

  return (
    <ul>
      <li>- {text} [<i>{name}</i>]</li>
    </ul>
  )
}