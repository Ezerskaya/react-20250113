import { Counter } from '../counter/Counter.jsx'
import { useForm } from './use-form.js'
import styles from './reviewForm.module.css'
import { Button } from '../button/Button.jsx'

export const ReviewForm = () => {
  const { form, setName, setText, setRatingIncrement, setRatingDecrement, resetForm } = useForm()

  return (
    <div >
      <p className={styles.title}>Please, leave your review <u>score of 0 to 5</u></p>
      <Counter count={form.rating} onIncrement={setRatingIncrement} onDecrement={setRatingDecrement}/>
      <br/>
      <div className={styles.wrapper}>
        <label htmlFor="name" className={styles.labelText}>Name</label>
        <input type="text" value={form.name} className={styles.inputStyle}
               onChange={(event) => setName(event.target.value)}/>

        <label htmlFor="name" className={styles.labelText}>Text</label>
        <input type="text" value={form.text} className={styles.inputStyle}
               onChange={(event) => setText(event.target.value)}/>
      </div>
      <Button type={'submit'} onClick={resetForm} title={'clear'}/>
    </div>
  )
}