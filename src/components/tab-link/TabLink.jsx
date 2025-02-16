import styles from './tabLink.module.css'
import { NavLink } from 'react-router'
import classNames from 'classnames'

export const TabLink = ({ children, to, viewVariant }) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
               classNames(styles.tab, {
                 [styles.isActive]: isActive,
                 [styles.middleSizeTab]: viewVariant === 'middleSizeTab',
               })
             }>
      {children}
    </NavLink>
  )
}