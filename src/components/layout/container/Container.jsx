import styles from './container.module.css'
import classNames from 'classnames'

export const Container = ({ children, size }) => {
  const containerClass = classNames(styles.container, {
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.l]: size === 'l',
    [styles.xl]: size === 'xl',
  })

  return (
    <div className={containerClass}>
      {children}
    </div>
  )
}