import styles from './header.module.css'
import { ToggleAuthButton } from '../../toggle-auth-button/toggle-auth-button.jsx'
import { ToggleThemeButton } from '../../toggle-theme-button/toggle-theme-button.jsx'
import { Link } from 'react-router'

export const Header = () => {

  return (
    <div className={styles.header}>
      <Link to={'/restaurants'}>
        <span>Greetings, Go slow, it&#39;s good.</span>
      </Link>
      <ToggleAuthButton/>
      <ToggleThemeButton/>
    </div>
  )
}