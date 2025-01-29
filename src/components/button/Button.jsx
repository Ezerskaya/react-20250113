import styles from './button.module.css'
import classNames from 'classnames'

export const Button = ({children, disabled, onClick, extraStyles}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classNames(styles.button, extraStyles)}>
      {children}
    </button>
  )
}