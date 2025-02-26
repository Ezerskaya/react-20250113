import { Counter } from "../counter/Counter.jsx"
import { useForm } from "./use-form.js"
import styles from "./reviewForm.module.css"
import { Button } from "../button/Button.jsx"

export const ReviewForm = ({ onSubmit, disableSubmit }) => {
  const { form, setText, setRatingIncrement, setRatingDecrement, resetForm } = useForm()

  const { text, rating } = form

  return (
    <div>
      <p className={styles.title}>Please, leave your review <u>score of 0 to 5</u></p>
      <Counter count={form.rating} onIncrement={setRatingIncrement} onDecrement={setRatingDecrement}/>
      <br/>
      <div className={styles.wrapper}>
        <label htmlFor="name" className={styles.labelText}>Text</label>
        <input type="text" value={form.text} className={styles.inputStyle}
               onChange={(event) => setText(event.target.value)}/>
      </div>
      <Button onClick={resetForm} title={"clear"}/>
      <Button type={"submit"}
              onClick={() => onSubmit({ text, rating })}
              title={"submit"}
              disabled={disableSubmit}
      />
    </div>
  )
}