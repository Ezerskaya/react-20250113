import { use } from "react"
import { AuthContext } from "../auth-context/index.js"
import { ReviewForm } from "../review-form/ReviewForm.jsx"
import styles from "./restaurant.module.css"
import { Outlet } from "react-router"
import { Tabs } from "../tabs/Tabs.jsx"
import { TabLink } from "../tab-link/TabLink.jsx"

export const Restaurant = ({ name, cover, description, addReview, addReviewLoading }) => {
  const { auth } = use(AuthContext)

  if (!name) {
    return null
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        <u>{name}</u>
      </h2>
      [{description}]
      <img src={cover} alt=""/>
      <Tabs>
        <TabLink to="menu" viewVariant="middleSizeTab">Menu</TabLink>
        <TabLink to="reviews" viewVariant="middleSizeTab">Reviews</TabLink>
      </Tabs>
      <Outlet/>
      {auth.isAuth && <ReviewForm onSubmit={addReview} disableSubmit={addReviewLoading}/>}
    </div>
  )
}
