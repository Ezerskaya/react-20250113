import styles from './button.module.css'
import classNames from 'classnames'

const variantClasses = {
  primary: styles.button,
  withoutBg: styles.buttonWithoutBg,
}

export const Button = ({ children, disabled, onClick, viewVariant = 'primary', extraStyles }) => {

  const variantStyle = variantClasses[viewVariant] || styles.button

  return (
    <button disabled={disabled} onClick={onClick} className={classNames(variantStyle, extraStyles)}>
      {children}
    </button>
  )
}