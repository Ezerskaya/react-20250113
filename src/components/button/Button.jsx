import styles from './button.module.css'
import classNames from 'classnames'

export const Button = ({
  title,
  disabled,
  onClick,
  viewVariant = "contained",
  className
}) => {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(className, {
        [styles.contained]: viewVariant === 'contained',
        [styles.border]: viewVariant === 'border',
      })}>
      {title}
    </button>
  )
}