import styles from './header.module.css'
import { ToggleAuthButton } from '../../toggle-auth-button/toggle-auth-button.jsx'
import { ToggleThemeButton } from '../../toggle-theme-button/toggle-theme-button.jsx'

export const Header = () => {

  return (
    <div className={styles.header}>
      <span>Greetings, Go slow, it&#39;s good.</span>
      <ToggleAuthButton/>
      <ToggleThemeButton/>
    </div>
  )
}