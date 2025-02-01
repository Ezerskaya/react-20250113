import { Button } from '../button/Button.jsx'
import { use } from 'react'
import { AuthContext } from '../auth-context'
import styles from './toggleAuthButton.module.css'

export const ToggleAuthButton = () => {
  const { auth, toggleAuth, guestName } = use(AuthContext)

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{auth ? `Welcome! ${guestName}` : 'Are you hungry?'}</span>
      <Button onClick={toggleAuth} title={auth ? 'Log out' : 'Log in'} className={styles.button}/>
    </div>
  )
}