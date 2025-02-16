import { Link } from 'react-router'

export const HomePage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/restaurants">Hurry up!</Link>
    </div>
  )
}