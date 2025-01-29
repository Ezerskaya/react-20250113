import { Button } from '../button/Button.jsx'
import styles from './counter.module.css'

export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={styles.wrapper}>
      <Button onClick={onIncrement} extraStyles={styles.button}>+</Button>
      <span className={styles.countNumber}>{count}</span>
      <Button onClick={onDecrement} extraStyles={styles.button}>-</Button>
    </div>
  )
}