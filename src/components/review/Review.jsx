import { UserContainer } from '../user/userContainer.jsx'

export const Review = ({ text, userId }) => {
  return <>- {text} [<UserContainer id={userId}/>]</>
}