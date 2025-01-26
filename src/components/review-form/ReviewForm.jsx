import { Counter } from '../counter/Counter.jsx'
import { useForm } from './use-form.js'

export const ReviewForm = () => {
  const { form, setName, setText, setRatingIncrement, setRatingDecrement, resetForm } = useForm()

  return (
    <div>
      <b>Leave your review</b> <br/>
      <label htmlFor="name">Name</label>
      <input type="text" value={form.name}
             onChange={(event) => setName(event.target.value)}/>
      <br/>
      <label htmlFor="name">Text</label>
      <input type="text" value={form.text}
             onChange={(event) => setText(event.target.value)}/><br/>
      <span>Score of 0 to 5</span>
      <Counter count={form.rating} onIncrement={setRatingIncrement} onDecrement={setRatingDecrement}/>
      <button type={'submit'} onClick={resetForm}>clear</button>
    </div>
  )
}