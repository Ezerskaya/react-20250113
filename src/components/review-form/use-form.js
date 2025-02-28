import { useReducer } from 'react'
import {
  INITIAL_VALUE,
  SET_TEXT_ACTION,
  SET_RATING_INCREMENT_ACTION,
  SET_RATING_DECREMENT_ACTION,
  RESET_ACTION
} from '../../constants/constants.js'
import { reducer } from './reducer.js'

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE)


  const setText = (value) => dispatch({ type: SET_TEXT_ACTION, payload: value })
  const setRatingIncrement = () => dispatch({ type: SET_RATING_INCREMENT_ACTION })
  const setRatingDecrement = () => dispatch({ type: SET_RATING_DECREMENT_ACTION })
  const resetForm = () => dispatch({ type: RESET_ACTION })

  return {
    form,
    setText,
    setRatingIncrement,
    setRatingDecrement,
    resetForm
  }
}
