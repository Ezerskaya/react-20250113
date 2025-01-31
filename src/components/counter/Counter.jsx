import { Button } from '../button/Button.jsx'
import styles from './counter.module.css'

export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={styles.wrapper}>
      <Button onClick={onIncrement} viewVariant={'border'} title={'+'}/>
      <span className={styles.countNumber}>{count}</span>
      <Button onClick={onDecrement} viewVariant={'border'} title={'-'}/>
    </div>
  )
}