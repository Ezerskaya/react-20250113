import { Button } from "../button/Button.jsx"
import { use } from "react"
import { AuthContext } from "../auth-context"
import styles from "./toggleAuthButton.module.css"

export const ToggleAuthButton = () => {
  const { auth, toggleAuth } = use(AuthContext)

  return (<div className={styles.wrapper}>
    <span>{auth.isAuth ? "Welcome!" : "Are you hungry?"}</span>
    <Button onClick={toggleAuth} title={auth.isAuth ? "Log out" : "Log in"}
            className={styles.button}
    />
  </div>)
}